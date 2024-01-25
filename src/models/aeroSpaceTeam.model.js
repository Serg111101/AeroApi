// NPM Modules
import knex from 'knex';
import knexConfigs from '../../knex.configs';
import { LoggerUtil } from '../../src/utils';
const pg = knex(knexConfigs.development);

class AeroSpaceTeamModel  {

  // Methods
  static getOurTeam(lang) {
    try {
      return lang === "AM"
      ? pg("our_team").select("*").orderBy("id").returning("*")
      : lang === "US"
      ? pg("our_team_en").select("*").orderBy("id").returning("*")
      : lang === "RU"
      ? pg("our_team_ru").select("*").orderBy("id").returning("*")
      : null;
    
    } catch (error) {
      console.log(error);
      LoggerUtil.error(error.message);

    }

  }


}

export default AeroSpaceTeamModel;