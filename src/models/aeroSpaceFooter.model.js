
// N P M
import knex from 'knex';

//LOCAL MODULES
import knexConfigs from '../../knex.configs';
import { LoggerUtil } from '../../src/utils';

const pg = knex(knexConfigs.development);


class AeroSpaceFooterModel  {
  
  // Methods
  static async getFooter(lang) {
    try {
      return lang === "AM"
      ? pg("footer").select("*").orderBy("id").returning("*")
      : lang === "US"
      ? pg("footer_en").select("*").orderBy("id").returning("*")
      : lang === "RU"
      ? pg("footer_ru").select("*").orderBy("id").returning("*")
      : null;
    
    } catch (error) {
      LoggerUtil.error(error.message);
    }
  }

  static addFooter(payload, lang) {
    try {
      return lang === "AM"
      ? pg("footer").insert(payload).returning('*')
      : lang === "US"
      ? pg("footer_en").insert(payload).returning('*')
      : lang === "RU"
      ? pg("footer_ru").insert(payload).returning('*')
      : null;
    
    } catch (error) {
      LoggerUtil.error(error.message);
    }
  }

  static editFooter(payload, lang,id) {
    payload.updated_at = new Date();
    try {
      return lang === "AM"
      ? pg("footer").update(payload).where('id', '=', id).returning('*')
      : lang === "US"
      ? pg("footer_en").update(payload).where('id', '=', id).returning('*')
      : lang === "RU"
      ? pg("footer_ru").update(payload).where('id', '=', id).returning('*')
      : null;
    
    } catch (error) {
      LoggerUtil.error(error.message);
    }
  }

  static deleteFooter(id, lang) {
     try {
      return lang === "AM"
      ? pg("footer").del().where('id', '=', id).returning('*')
      : lang === "US"
      ? pg("footer_en").del().where('id', '=', id).returning('*')
      : lang === "RU"
      ? pg("footer_ru").del().where('id', '=', id).returning('*')
      : null;
    
    } catch (error) {
      LoggerUtil.error(error.message);
    }
  }


}

export default AeroSpaceFooterModel;