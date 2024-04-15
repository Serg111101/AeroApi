import { Model } from "objection";
import { LoggerUtil } from "../../src/utils";
import knex from "knex";
import fs from "fs";

// Import the uuid package
import {  v4 as uuidv4 } from 'uuid';

// Generate a UUID v4




import knexConfigs from "../../knex.configs";
const URL_IMAGES = process.env.SERVER_HOST_IMAGES;

// Local Modules
import Status from "../enum/status.enum";
import PSQLStorage from "../storage/psql.storage";

const pg = knex(knexConfigs.development);

class AeroSpaceLogoModel extends Model {
  static get idColumn() {
    return "id";
  }

  static get tableName() {
    return "lessons";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        id: { type: "integer" },
        logo: { type: "string", minLength: 1, maxLength: 255 },
        title: { type: "string", minLength: 1, maxLength: 255 },
        text: { type: "string", minLength: 1 },
      },
    };
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  // Methods
  static async getLessons(lang) {
    try {
      const result =
        lang === "AM"
          ? await pg("lessons").select("*").orderBy("id")
          : lang === "US"
          ? await pg("lessons_en").select("*").orderBy("id")
          : lang === "RU"
          ? await pg("lessons_ru").select("*").orderBy("id")
          : null;

      return result;
    } catch (error) {
      console.log('error');
      return error;
    }
  }
  static async getLectures(unique_key, lang) {
    try {
      const result =
        lang === "AM"
          ? await pg("lessons")
              .select("lesson", "lectures", "background", "color")
              .where('unique_key','=',unique_key)
              .orderBy("id")
          : lang === "US"
          ? await pg("lessons_en")
              .select("lesson", "lectures", "background", "color")
              .where('unique_key','=',unique_key)
              .orderBy("id")
          : lang === "RU"
          ? await pg("lessons_ru")
              .select("lesson", "lectures", "background", "color")
              // .where("title", "like", `${lectures}%`)
              .where('unique_key','=',unique_key)
              .orderBy("id")
          : null;

      return result;
    } catch (error) {
      console.log(error);
    }
  }
  static async getSlides(lectures, lang) {
    let result = [];

    const slide = await pg(
      lang === "arm" ? "lessons" : lang === "en" ? "lessons_en" : "lessons_ru"
    )
      .select("id", "slides", "lectures", "created_at")
      .orderBy("id")
      .where("title", "=", lectures);

    for (let i = 0; i < slide[0].slides.length; i++) {
      const newObject = {
        lectures: lectures,
        slide: slide[0].slides[i],
      };

      result.push(newObject);
    }

    return result;
  }

  static async addNewLesson(info, lang) {
    const background = await pg("lessons").select("*");

    info.created_at = new Date();
    info.ikonka = `${URL_IMAGES}/propeller.jpg`;
    info.color = "#adcce9";
    info.button = "Հետ";
    info.background = background[0].background
    console.log(info.lectures,"jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhk");
    let lectures = info.lectures.map((el,index)=>{
      if(lang === "AM"){
        if(index===(info.lectures.length-1)){
          return {...el ,text:"Questions"}
        }else{

          return {...el ,text:"It's empty"}
        }
      }
      else{
        if(index===(info.lectures.length-1)){
          return {...el ,text:"Հարցաշար"}
        }else{

          return {...el ,text:"Դատարկ է"}
        }
       
      }
    })
    let data = lang === "AM" ? {
        created_at: info.created_at, 
        ikonka: info.ikonka, 
        color: info.color, 
        button: 'Go back', 
        unique_key: info.unique_key,
        icon: info.icon,
        lesson: "It's empty",
        lectures: JSON.stringify(lectures),
        background: background[0]?.background
      } :
      {
        created_at: info.created_at, 
        ikonka: info.ikonka, 
        color: info.color, 
        button: 'Հետ', 
        unique_key: info.unique_key,
        icon: info.icon,
        lesson: "Դատարկ է",
        lectures: JSON.stringify(lectures),
        background: background[0]?.background
      }
    
    const langMap = {
      AM: "lessons",
      US: "lessons_en",
    };

    const langKey = langMap[lang] || "lessons_ru";

    let dbName = lang === "AM" ? "lessons_en" : "lessons";

    const updatedValues = info.lectures
      ? JSON.stringify(Object.values(info.lectures))
      : undefined;

    const insertionResult = await pg(langKey)
      .insert(info.lectures ? { lectures: updatedValues } : info)
      .returning(info.lectures ? "id" : "*");
    
      
      if (info.lectures) {
        delete info.lectures;
        await pg(langKey)
        .update(info)
        .where("id", "=", insertionResult[0].id)
        .returning("*");
      }
      
      const otherDb = await pg(dbName)
        .insert(data).returning("*");
        
    return {insertionResult, otherDb};
  }
  // static async editExistLesson(id, info, lang) {
  //   // console.log(id, info, lang);
  //   const langMap = {
  //     "AM": "lessons",
  //     "US": "lessons_en",
  //   };

  //   const langKey = langMap[lang] || "lessons_ru";

  //   const isLectures = Object.keys(info)[0] === "lectures";
  //   const updatedValues = isLectures ? JSON.stringify(Object.values(info).flat()) : undefined;

  //   return AeroSpaceLogoModel.query()
  //     .update(isLectures ? { lectures: updatedValues } : info)
  //     .where("id", "=", id)
  //     .from(langKey)
  //     .returning("*");
  // }

  static async editExistLesson(unique_key, info, lang) {
  
    const langMap = {
      AM: ["lessons","topics","questions"],
      US: ["lessons_en","topics_en","questions_en"]
    };
    

    const langKey = langMap[lang] || ["lessons_ru","topics_ru","questions_ru"];

    for(let i in langKey){
      const updateLessons = await pg(langKey[i]).update({lesson: info[0].lesson}).where('unique_key', '=', unique_key)

    }
    const isLectures = Object.keys(info[0]).includes("lectures", "lessons");
    const updatedValues = isLectures
      ? JSON.stringify(Object.values(info[0].lectures))
      : undefined;
    info[0].lectures = updatedValues;


    const x = await AeroSpaceLogoModel.query()
    .update(info[0])
    .where("unique_key", "=", unique_key)
    .from(langKey[0])
    .returning("*");
   


    const hyData = await pg("lessons").select("*").where("unique_key", "=", unique_key);

    console.log(info[0], 'sdjkfhsdfgh');
    const enData = await pg("lessons_en").select("*").where("unique_key", "=", unique_key);
  
    let splitedLectures = hyData[0].lectures.slice(0, hyData[0].lectures.length-1);
    let splitedLecturesEn = enData[0].lectures.slice(0, enData[0].lectures.length-1);

    if(info[0].lectures.length > hyData[0].lectures.length){
      const s = JSON.parse(info[0].lectures);
      let a = s.length - hyData[0].lectures.length;

      // console.log(s.length, "djhsgdjhs");
      // console.log(hyData[0].lectures.length, "skskks");
      // console.log(a, 'a');

      for (let i = 0; i < a; i++) {
        console.log(info[0].lectures[(info[0].lectures.length-1)],"fgasdfgsdfg222222222222222");
        splitedLectures.push({color: s[(s.length - 1 - a + i)].color, text: "Դատարկ է"});
      }
      console.log(hyData[0].lectures[hyData[0].lectures.length-1],"hyData[0].lectures[hyData[0].lectures.length-1]");
      splitedLectures.push(hyData[0].lectures[hyData[0].lectures.length-1]);

      console.log(splitedLectures, "lslsls");
      
      const addData = await pg("lessons").update({lectures: JSON.stringify(splitedLectures)}).where("unique_key", "=", unique_key);
    }
    if(info[0].lectures.length > enData[0].lectures.length){
      const s = JSON.parse(info[0].lectures);
      let a = s.length - enData[0].lectures.length;

      // console.log(s.length, "djhsgdjhs");
      // console.log(hyData[0].lectures.length, "skskks");
      // console.log(a, 'a');

      for (let i = 0; i < a; i++) {
        console.log(info[0].lectures[(info[0].lectures.length-a-1-i)].color,"fgasdfgsdfg222222222222222");
        splitedLecturesEn.push({color: s[(s.length - 1 - a + i)].color, text: "It's empty"});
      }
      console.log(enData[0].lectures[enData[0].lectures.length-1],"hyData[0].lectures[hyData[0].lectures.length-1]");
      splitedLecturesEn.push(enData[0].lectures[enData[0].lectures.length-1]);

      console.log(splitedLecturesEn, "lslsls");
      
      const addData = await pg("lessons_en").update({lectures: JSON.stringify(splitedLecturesEn)}).where("unique_key", "=", unique_key);
    }



  }

  static async deleteExistLesson(id, lang, unique_key) {
    try {
      const langMap = [
        "lessons","topics","questions",
        "lessons_en","topics_en","questions_en"
      ];


      
      // UNLINK uploads -----------------------------------------------------------------------------------------------------------
      const delData = await pg("lessons")
        .select("icon")
        .where("unique_key", "=", unique_key)

        const delIcon = await pg("lessons_en")
        .select("icon")
        .where("unique_key", "=", unique_key)


      const dirnameBackround = delData[0].icon.split("/");
      const delBackround = dirnameBackround[dirnameBackround.length - 1];

      fs.unlink(`${delBackround}`, (err) => {
        if (err) {
          console.error("Error deleting upload file:", err);
        } else {
          console.log("upload file deleted successfully.");
        }
      });
      

      // const langKey = langMap[lang] || ["lessons_ru","topics_ru","questions_ru"];
      // const langKey = Object.keys(langMap);
      for(let i in langMap){
        const deletingValues = await pg(langMap[i]).select('*').where('unique_key', '=', unique_key);
        if(deletingValues.length > 0){
          const deleteLessons = await pg(langMap[i]).del().where('unique_key', '=', unique_key)
        }
  
      }

      //---------------------------------------------------------------------------------------------------------------------------
      // return AeroSpaceLogoModel.query()
      //   .del()
      //   .where("id", "=", id)
      //   .from(langKey[0])
      //   .returning("*");
    } catch (error) {
      LoggerUtil.error(error);
    }
  }
}

export default AeroSpaceLogoModel;
