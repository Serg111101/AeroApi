import { Model } from 'objection';
import knex from 'knex';
import knexConfigs from '../../knex.configs';
import { LoggerUtil } from '../../src/utils';
import fs from 'fs'

// Local Modules

const pg = knex(knexConfigs.development);

class AeroSpaceAboutModel  {
 
  // Methods

  static getAbout(lang) {
    try {
      return lang === "AM"
      ? pg("about").select("*").orderBy("id").returning("*")
      : lang === "US"
      ? pg("about_en").select("*").orderBy("id").returning("*")
      : lang === "RU"
      ? pg("about_ru").select("*").orderBy("id").returning("*")
      : null;
    
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static editAbout(info, lang, id) {
    info.updated_at = new Date();
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "about";
          break;
        case "US":
          tableName = "about_en";
          break;
        case "RU":
          tableName = "about_ru";
          break;
        default:
          tableName = null;
      }
      if (tableName) {
        return pg(tableName).
        update( info ).where('id','=',id).returning('*')
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static editAboutPage(id,info,lang) {
    info.updated_at = new Date();
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "our_team";
          break;
        case "US":
          tableName = "our_team_en";
          break;
        case "RU":
          tableName = "our_team_ru";
          break;
        default:
          tableName = null;
      }
      if (tableName) {
        return pg(tableName).
        update( info ).where('id','=',id).returning('*')
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
  static async addNewAboutBox(info,lang) {
    info.created_at = new Date();
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "our_team";
          break;
        case "US":
          tableName = "our_team_en";
          break;
        case "RU":
          tableName = "our_team_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        return pg(tableName)
        .insert(info).returning('*');
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
   
    
  }
  static async deleteExistAboutBox(id,lang) {
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "our_team";
          break;
        case "US":
          tableName = "our_team_en";
          break;
        case "RU":
          tableName = "our_team_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        const delData = await pg(tableName).select('image').where('id','=',id)
        if(delData){
          const dirnameImage = delData[0].image.split('/');
          const delImage = dirnameImage[dirnameImage.length-1];
          fs.unlink(`images/${delImage}`, (err) => {
            if (err) {
              console.error('Error deleting image file:', err);
            } else {
              console.log('Image file deleted successfully.');
            }
          });

        }
        return pg(tableName)
        .del().where('id','=',id).returning('*')
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
  
}

export default AeroSpaceAboutModel;