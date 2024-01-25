// NPM Modules
import knex from "knex";
import knexConfigs from "../knex.configs";

// Local Modules
import { LoggerUtil } from "../src/utils";

function down(pg) {
  return pg.schema

    .dropTableIfExists('home_page')
    .dropTableIfExists('about')
    .dropTableIfExists('games')
    .dropTableIfExists('our_partners')
    .dropTableIfExists('our_team')
    .dropTableIfExists('lessons')
    .dropTableIfExists('topics')
    .dropTableIfExists('questions')
    .dropTableIfExists('quiz')
    .dropTableIfExists('children')
    .dropTableIfExists('admin')
    .dropTableIfExists('class')
    .dropTableIfExists('header')
    .dropTableIfExists('contact')
    .dropTableIfExists('footer')
    .dropTableIfExists('satelite')
    .dropTableIfExists('satellite_questions')

}

async function init() {
  try {
    const options =
      process.env.NODE_ENV === "production"
        ? knexConfigs.production
        : knexConfigs.development;
    const pg = knex(options);
    await down(pg);

    console.log("Successfully dropped all tables ... ");
    process.kill(process.pid);
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();
