

import knex from 'knex';
import knexConfigs from '../../knex.configs';
import { LoggerUtil } from '../../src/utils';

const pg = knex(knexConfigs.development);

class AeroSpaceTopicsModel {


    static async gettopics(unique_key, lang) {
      
        try {   
          const result = lang == 'AM'
          ? await pg('topics').select('*').where('unique_key','=',unique_key).orderBy('id')
          : lang == 'US'
            ? await pg('topics_en').select('*').where('unique_key','=',unique_key).orderBy('id')
            : lang == 'RU'
              ? await pg('topics_ru').select('*').where('unique_key','=',unique_key).orderBy('id')
              : null;
        
        return result;
        

        } catch (error) {
            console.log(error);
        }
    }

    static async addNewTopics(info, lang) {
        try {
          if(lang == 'AM') {
            const result = await pg('topics').insert(info).returning('*');
            return result;
          }
          else if(lang === 'US'){
            const result = await pg('topics_en').insert(info).returning('*');
            return result;
          }else{
            const result = await pg('topics_ru').insert(info).returning('*');
            return result;
          }
  
        } catch (error) {
            console.log(error);
        }
    }
    static async editExistTopics(id, info, lang) {
        try {
          if(lang == 'AM') {
            const result = await pg('topics').update(info).where('id','=',id).returning('*');
            return result;
          }
          else if(lang === 'US'){
            const result = await pg('topics_en').update(info).where('id','=',id).returning('*');
            return result;
          } else{
            const result = await pg('topics_ru').update(info).where('id','=',id).returning('*');
            return result;
          }

        } catch (error) {
            console.log(error);
        }
    }    
    static async deleteExistTopics(id) {
        try {
          if(lang == 'AM') {
            const result = await pg('topics').del().where('id','=',id).returning('*');
            return result;
          }
          else if(lang === 'US') {
            const result = await pg('topics_en').del().where('id','=',id).returning('*');
            return result;
          } else{
            const result = await pg('topics_ru').del().where('id','=',id).returning('*');
            return result;
          }

        } catch (error) {
            console.log(error);
        }
    }
    
    
    
}
export default AeroSpaceTopicsModel;