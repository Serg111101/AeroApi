import knex from "knex";
import knexConfigs from "../../knex.configs";
import { LoggerUtil } from "../../src/utils";
const pg = knex(knexConfigs.development);

class aeroSpaseQuiz {
  static async questions(lesson, lang) {
    try {
      let query = null;

      switch (lang) {
        case "AM":
          query = pg("questions")
            .select("*")
            .where("lesson", "=", lesson)
            // .orderByRaw("random()")
            // .limit(10)
            .returning("*");
            
          break;
        case "US":
          query = pg("questions_en")
            .select("*")
            .where("lesson", "=", lesson)
            // .orderByRaw("random()")
            // .limit(10)
            .returning("*");
          break;
        case "RU":
          query = pg("questions_ru")
            .select("*")
            .where("lesson", "=", lesson)
            // .orderByRaw("random()")
            // .limit(10)
            .returning("*");
          break;
        default:
          query = null;
      }

      return query;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async addNewQuestion(info, lang) {
    info.created_at = new Date();
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "questions";
          break;
        case "US":
          tableName = "questions_en";
          break;
        case "RU":
          tableName = "questions_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        return pg(tableName).insert(info).returning("*");
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
  static async editExistQuestion(info, id, lang) {
    console.log(info);
    info.updated_at = new Date();
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "questions";
          break;
        case "US":
          tableName = "questions_en";
          break;
        case "RU":
          tableName = "questions_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        return pg(tableName).update(info).where("id", "=", id).returning("*");
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
  static async deleteExistQuestion(id, lang) {
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "questions";
          break;
        case "US":
          tableName = "questions_en";
          break;
        case "RU":
          tableName = "questions_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        return pg(tableName).del().where("id", "=", id).returning("*");
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
}
export default aeroSpaseQuiz;
