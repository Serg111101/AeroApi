import knex from "knex";
import knexConfigs from "../../knex.configs";
import { LoggerUtil } from "../../src/utils";
import fs from "fs";

const pg = knex(knexConfigs.development);

class AeroSpaceTopicsModel {
  static async satellite(lang) {
    try {
      const result =
        lang === "AM"
          ? await pg("satelite").select("*").orderBy("id")
          : lang === "US"
          ? await pg("satelite_en").select("*").orderBy("id")
          : lang === "RU"
          ? await pg("satelite_ru").select("*").orderBy("id")
          : null;

      return result;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async addSatellite(info, lang) {
    info.created_at = new Date();
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "satelite";
          break;
        case "US":
          tableName = "satelite_en";
          break;
        case "RU":
          tableName = "satelite_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        for (const key in info) {
          if(typeof info[key] === "object" && info[key][0] === undefined){
            delete info[key];            
          }
        }
          return pg(tableName).insert(info).returning("*");
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async editSatellite(info, id, lang) {
    console.log(info, id, lang,"EDITTTTTTTTT");
    info.updated_at = new Date();
    const key = Object.keys(info)[0];
    const values = Object.values(info)[0];
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "satelite";
          break;
        case "US":
          tableName = "satelite_en";
          break;
        case "RU":
          tableName = "satelite_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        const data = await pg(tableName).select(key).where('id','=',id).first();
        if (typeof values == "object" && values[1] !== undefined ) {
          return pg(tableName).update(info).where("id", "=", id).returning("*");

        } else if(data[key].length === 1 && typeof values == "object" && values[1] == undefined && info.update === true){
          delete info.update
          return pg(tableName).update(info).where("id", "=", id).returning("*");

        }else if(data[key].length === 1 && typeof values == "object" && values[1] == undefined && info.update === false){
          delete info.update
          data[key].push(Object.values(info)[0][0]);

          return pg(tableName)
            .update({ [key]: data[key] })
            .where("id", "=", id)
            .returning("*");
        }
        else if (typeof values == "object" && values[1] == undefined) {
          data[key].push(Object.values(info)[0][0]);

          return pg(tableName)
            .update({ [key]: data[key] })
            .where("id", "=", id)
            .returning("*");
        } else {
          return pg(tableName).update(info).where("id", "=", id).returning("*");
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async deleteSatellite(lang, key, index, id) {
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "satelite";
          break;
        case "US":
          tableName = "satelite_en";
          break;
        case "RU":
          tableName = "satelite_ru";
          break;
        default:
          tableName = null;
      }
      /*---------------------------------  Remove Satellite Elements -------------------------------------------------------------------- */
      if (tableName) {
        const getList = await pg(tableName).select(key).where('id','=',id).first();
        if (typeof getList[key] == "object") {
          const removeElement = getList[key].splice(index, 1);

          return pg(tableName)
            .update({ [key]: getList[key] })
            .where('id','=',id)
            .returning("*");
        } else {
          // Using    FS UNLINK ---------------------------------------------------------------------

          if (getList[key]) {
            const dirnameLogo = getList[key].split("/");

            const delLogo = dirnameLogo[dirnameLogo.length - 1];

            fs.unlink(`videos/${delLogo}`, (err) => {
              if (err) {
                console.error("Error deleting upload file:", err);
              } else {
                console.log("upload file deleted successfully.");
              }
            });
          }
          getList[key] = "";

          const delData = await pg(tableName)
            .update({ [key]: getList[key] })
            .where('id','=',id)
            .returning("*");
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
  /*---------------------------------  Remove Satellite Elements -------------------------------------------------------------------- */
}
export default AeroSpaceTopicsModel;
