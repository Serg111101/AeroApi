// NPM Modules
import { Model } from "objection";
import { LoggerUtil } from "../../src/utils";
import knex from "knex";
import knexConfigs from "../../knex.configs";

const pg = knex(knexConfigs.development);

// Local Modules
import Status from "../enum/status.enum";
import PSQLStorage from "../storage/psql.storage";


class AeroSpaceHeaderModel extends Model {
  static get idColumn() {
    return "id";
  }

  static get tableName() {
    return "header";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1, maxLength: 255 },
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
  static getHeader(lang) {
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "header";
          break;
        case "US":
          tableName = "header_en";
          break;
        case "RU":
          tableName = "header_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        return pg(tableName).select("").orderBy("id").returning("");
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async addHeader(payload, lang) {
    payload.created_at = new Date();
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "header";
          break;
        case "US":
          tableName = "header_en";
          break;
        case "RU":
          tableName = "header_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        return pg(tableName).insert(payload).returning("*");
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async editHeader(payload, id, lang) {
    payload.updated_at = new Date();

    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "header";
          break;
        case "US":
          tableName = "header_en";
          break;
        case "RU":
          tableName = "header_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        return pg(tableName)
          .update(payload)
          .where("id", "=", id)
          .returning("*");
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }

  static async deleteHeader(id, lang) {
    try {
      let tableName;
      switch (lang) {
        case "AM":
          tableName = "header";
          break;
        case "US":
          tableName = "header_en";
          break;
        case "RU":
          tableName = "header_ru";
          break;
        default:
          tableName = null;
      }

      if (tableName) {
        return pg(tableName).where("id", "=", id).del().returning("*");
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }
  }
}

export default AeroSpaceHeaderModel;