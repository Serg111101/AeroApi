// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function down(pg) {
  return pg.schema
    // .dropTableIfExists('lessons_en')
    .dropTableIfExists('topics_en')
    .dropTableIfExists('header_en')
    .dropTableIfExists('home_page_en')
    .dropTableIfExists('footer_en')
    .dropTableIfExists('lessons_en')
    .dropTableIfExists('our_team_en')
    .dropTableIfExists('about_en')
    .dropTableIfExists('satelite_en')
    .dropTableIfExists('our_partners_en')
    .dropTableIfExists('questions_en')
    .dropTableIfExists('satelite_en')
    .dropTableIfExists('satellite_questions_en')
    .dropTableIfExists('questions_en')



    
    
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await down(pg);
    
    
    console.log('Successfully dropped all tables ... ');
    process.kill(process.pid);
  
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();
