import { Model } from "objection";
import { LoggerUtil } from "../../src/utils";
import knex from "knex";
import fs from "fs";

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
  static async getLectures(lesson, lang) {
    try {
      const result =
        lang === "AM"
          ? await pg("lessons")
              .select("lesson", "lectures", "background", "color")
              .where('lesson','=',lesson)
              .orderBy("id")
          : lang === "US"
          ? await pg("lessons_en")
              .select("lesson", "lectures", "background", "color")
              .where('lesson','=',lesson)
              .orderBy("id")
          : lang === "RU"
          ? await pg("lessons_ru")
              .select("lesson", "lectures", "background", "color")
              // .where("title", "like", `${lectures}%`)
              .where('lesson','=',lesson)
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
    info.created_at = new Date();
    info.ikonka = `${URL_IMAGES}/propeller.jpg`;
    info.color = "#adcce9";
    info.button = "Հետ";

    const langMap = {
      AM: "lessons",
      US: "lessons_en",
    };

    const langKey = langMap[lang] || "lessons_ru";

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

    return insertionResult;
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

  static async editExistLesson(id, info, lang) {
    const langMap = {
      AM: ["lessons","topics","questions"],
      US: ["lessons_en","topics_en","questions_en"]
    };
    
    const langKey = langMap[lang] || ["lessons_ru","topics_ru","questions_ru"];

    for(let i in langKey){
      const updateLessons = await pg(langKey[i]).update({lesson:info[0].lesson}).where('lesson','=',info[1])

    }
    const isLectures = Object.keys(info[0]).includes("lectures","lessons");
    const updatedValues = isLectures
      ? JSON.stringify(Object.values(info[0].lectures))
      : undefined;
    info[0].lectures = updatedValues;


    return AeroSpaceLogoModel.query()
      .update(info[0])
      .where("id", "=", id)
      .from(langKey[0])
      .returning("*");


  }

  static async deleteExistLesson(id, lang,lesson) {
    try {
      const langMap = {
        AM: ["lessons","topics","questions"],
        US: ["lessons_en","topics_en","questions_en"]
      };

      const langKey = langMap[lang] || ["lessons_ru","topics_ru","questions_ru"];
      for(let i in langKey){
        const deleteLessons = await pg(langKey[i]).del().where('lesson','=',lesson)
  
      }

      // UNLINK uploads -----------------------------------------------------------------------------------------------------------
      const delData = await pg("")
        .select("icon")
        .where("id", "=", id)
        .from(langKey[0]);

      const dirnameBackround = delData[0].icon.split("/");
      const delBackround = dirnameBackround[dirnameBackround.length - 1];

      fs.unlink(`images/${delBackround}`, (err) => {
        if (err) {
          console.error("Error deleting upload file:", err);
        } else {
          console.log("upload file deleted successfully.");
        }
      });
      //---------------------------------------------------------------------------------------------------------------------------
      return AeroSpaceLogoModel.query()
        .del()
        .where("id", "=", id)
        .from(langKey[0])
        .returning("*");
    } catch (error) {
      LoggerUtil.error(error);
    }
  }
}

export default AeroSpaceLogoModel;
