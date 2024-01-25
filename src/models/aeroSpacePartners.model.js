import knex from 'knex';
import knexConfigs from '../../knex.configs';
import { LoggerUtil } from '../../src/utils';
const pg = knex(knexConfigs.development);

class AeroSpacePartnersModel  {

  // Methods
  static getPartners(lang) {
    try {
      return lang === "AM"
      ? pg("our_partners").select("*").orderBy("id").returning("*")
      : lang === "US"
      ? pg("our_partners_en").select("*").orderBy("id").returning("*")
      : lang === "RU"
      ? pg("our_partners_ru").select("*").orderBy("id").returning("*")
      : null;
    
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);
    }  
  }

}

export default AeroSpacePartnersModel;