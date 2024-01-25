import knex from "knex";
import knexConfigs from "../../knex.configs";
import { LoggerUtil } from "../utils";
const pg = knex(knexConfigs.development);
import dotenv from "dotenv";
dotenv.config();

class aeroSpaceQuestionsModel {
  static async getSatelliteQuestions(lang) {
    try {
      return lang === "AM"
        ? pg("satellite_questions").select("*").orderByRaw("random()").orderBy("id").limit(10).returning("*")
        : lang === "US"
        ? pg("satellite_questions_en").select("*").orderByRaw("random()").orderBy("id").limit(10).returning("*")
        : lang === "RU"
        ? pg("satellite_questions_ru").select("*").orderByRaw("random()").orderBy("id").limit(10).returning("*")
        : null;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async addSatelliteQuestion(lang, info) {
    info.background = `${process.env.SERVER_HOST_IMAGES}/giphy.gif`;
    info.button = ["Դուք հավաքեցիք ", "Արբանյակ", "Առաջ", "Հետ"];
    info.lesson = "1U հարցաշար";
    info.created_at = new Date();

    try {
      return lang === "AM"
        ? pg("satellite_questions").insert(info).returning("*")
        : lang === "US"
        ? pg("satellite_questions_en").insert(info).returning("*")
        : lang === "RU"
        ? pg("satellite_questions_ru").insert(info).returning("*")
        : null;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
  static async editSatelliteQuestion(lang, id, info) {
    info.updated_at = new Date();

    try {
      return lang === "AM"
        ? pg("satellite_questions")
            .update(info)
            .where("id", "=", id)
            .returning("*")
        : lang === "US"
        ? pg("satellite_questions_en")
            .update(info)
            .where("id", "=", id)
            .returning("*")
        : lang === "RU"
        ? pg("satellite_questions_ru")
            .update(info)
            .where("id", "=", id)
            .returning("*")
        : null;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
  static async deleteSatelliteQuestion(lang, id) {
    try {
      return lang === "AM"
        ? pg("satellite_questions").del().where("id", "=", id).returning("*")
        : lang === "US"
        ? pg("satellite_questions_en").del().where("id", "=", id).returning("*")
        : lang === "RU"
        ? pg("satellite_questions_ru").del().where("id", "=", id).returning("*")
        : null;
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
}

export default aeroSpaceQuestionsModel;
