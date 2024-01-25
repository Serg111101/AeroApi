// NPM Modules
import { LoggerUtil } from "../../src/utils";
import knex from "knex";
import knexConfigs from "../../knex.configs";
import fs from "fs";

const pg = knex(knexConfigs.development);

class AeroSpaceLogoModel {
  static async getHomeIcons(different, lang) {
    try {
      let result;
      switch (lang) {
        case "AM":
          result = await pg("home_page")
            .select("*")
            .where("different", "=", different)
            .orderBy("id");
          break;
        case "US":
          result = await pg("home_page_en")
            .select("*")
            .where("different", "=", different)
            .orderBy("id");
          break;
        case "RU":
          result = await pg("home_page_ru")
            .select("*")
            .where("different", "=", different)
            .orderBy("id");
          break;
        default:
          result = null;
          break;
      }

      return result;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async editBlok(lang, different, index, info, id) {
    const columnName = "information";
    try {
      let result;
      let resultat;
      let informationArray;
      let alfa;
      async function updateData(tableName) {
        if (different === "text") {
          resultat = await pg(tableName)
            .select("information")
            .where("different", "=", different)
            .first();
          resultat.information[0].logo[info.index] = info.logo;
          if(info.title){
            resultat.information[0].title = info.title;
          }else{
            resultat.information[0].title = resultat.information[0].title;
          }

          result = await pg(tableName)
            .update({ information: resultat.information })
            .where("different", "=", different)
            .returning("*");
          console.log(result[0].information);
        } else {
          resultat = await pg(tableName)
            .select("information")
            .where("different", "=", different)
            .first();
          informationArray = resultat.information;
          alfa = informationArray[index];
          for (const [key, value] of Object.entries(info)) {
            alfa[key] = value;
          }
          informationArray[index] = alfa;

          result = await pg(tableName)
            .update({ information: informationArray })
            .where("different", "=", different)
            .returning("*");
        }
      }

      async function updateLogo(tableName){
        try {
          let cahngeId = id + 1; 
          if(info.logo){
            let payloadLogo = info.logo;

          return lang === "AM"
          ? pg(tableName).update({logo: payloadLogo}).where('id', '=', cahngeId).returning('*')
          : lang === "US"
          ? pg(tableName).update({logo: payloadLogo}).where('id', '=', cahngeId).returning('*')
          : lang === "RU"
          ? pg(tableName).update({logo: payloadLogo}).where('id', '=', cahngeId).returning('*')
          : null;
          }
       
        
        } catch (error) {
          LoggerUtil.error(error.message);
        }
      }

      switch (lang) {
        case "AM":
          updateData("home_page");
          updateLogo("footer");
          break;
        case "US":
          updateData("home_page_en");
          updateLogo("footer_en");


          break;
        case "RU":
          updateData("home_page_ru");
          updateLogo("footer_ru");


          break;
        default:
          result = null;
          break;
      }

      return result;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async addNewBlok(info, lang, different) {
    let resultat;
    let result;
    async function addData(tableName) {
      if (different === "text") {
        resultat = await pg(tableName)
          .select("information")
          .where("different", "=", different)
          .first();
        resultat.information[0].logo.push(info.logo);
        result = await pg(tableName)
          .update({ information: resultat.information })
          .where("different", "=", different)
          .returning("*");
        console.log(result[0].information);
      } else {
        result = await pg(tableName)
          .update({
            information: pg.raw(`array_append(information, ?)`, [info]),
          })
          .where("different", "=", different)
          .returning("*");
      }
    }

    try {
      let result;
      switch (lang) {
        case "AM":
          // result = await pg("home_page")
          //   .update({
          //     information: pg.raw(`array_append(information, ?)`, [info]),
          //   })
          //   .where("different", "=", different)
          //   .returning("*");
          addData("home_page");

          break;
        case "US":
          // result = await pg("home_page_en")
          //   .update({
          //     information: pg.raw(`array_append(information, ?)`, [info]),
          //   })
          //   .where("different", "=", different)
          //   .returning("*");
          addData("home_page_en");

          break;
        case "RU":
          // result = await pg("home_page_ru")
          //   .update({
          //     information: pg.raw(`array_append(information, ?)`, [info]),
          //   })
          //   .where("different", "=", different)
          //   .returning("*");
          addData("home_page_ru");

          break;
        default:
          result = null;
          break;
      }

      return result;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
  static async deleteExistBlok(lang, different, index, arrIndex) {
    try {
      let result;
      let resultat;
      async function delData(tableName) {
        if (different === "text" && arrIndex) {
          resultat = await pg(tableName)
            .select("information")
            .where("different", "=", different)
            .first();
          resultat.information[0].logo.splice(arrIndex, 1);
          result = await pg(tableName)
            .update({ information: resultat.information })
            .where("different", "=", different)
            .returning("*");
        } else {
          result = await pg(tableName)
            .where("different", "=", different)
            .update({ [`${columnName}[${index + 1}]`]: {} })
            .returning("*");
        }
      }
      let columnName = "information";
      let tableName;

      switch (lang) {
        case "AM":
          tableName = "home_page";
          delData(tableName);
          break;
        case "US":
          tableName = "home_page_en";
          delData(tableName);

          break;
        case "RU":
          tableName = "home_page_ru";
          delData(tableName);

          break;
        default:
          tableName = null;
          break;
      }

      if (tableName) {
        // UNLINK uploads ----------------------------------------------------------------------------------------------------------
        const delData = await pg(tableName)
          .select("information")
          .where("different", "=", different);

        if (delData[0].information[index].logo[arrIndex]) {
          const dirnameLogo =
            delData[0].information[index].logo[arrIndex].split("/");

          const delLogo = dirnameLogo[dirnameLogo.length - 1];

          fs.unlink(`images/${delLogo}`, (err) => {
            if (err) {
              console.error("Error deleting upload file:", err);
            } else {
              console.log("upload file deleted successfully.");
            }
          });
        }
        //-----------------------------------------------------------------------------------------------------------------------------------------
      }

      return result;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
}

export default AeroSpaceLogoModel;
