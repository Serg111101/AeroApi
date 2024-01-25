// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function up(pg) {
  return pg.schema
  .createTable('header_en', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();    
    table.dateTime('created_at');
    table.dateTime('updated_at');

  })
  .createTable('home_page_en', (table) => {
      table.increments('id').primary();
      table.string('different');
      table.specificType('information','jsonb[]').notNullable()
      table.dateTime('created_at');
      table.string('image');
      table.dateTime('updated_at');
  
    })

  .createTable('topics_en', (table) => {
    table.increments('id').primary();
    table.text('lesson');
    table.text('lectures');
    table.text('text1');
    table.text('text2');
    table.text('text3');
    table.string('image');
    table.specificType('text_arr','text[]')
    table.specificType('text_arr_margin','text[]')
    table.specificType('slides',' text[]');
    table.specificType('button', 'text[]');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  })
  .createTable('footer_en', (table) => {
    table.increments('id').primary();
    table.string('title')
    table.string('text')
    table.string('logo');
    table.dateTime('created_at');
    table.dateTime('updated_at');

  })
  .createTable('lessons_en', (table) => {
    table.increments('id').primary();
    table.string('ikonka');
    table.string('icon');
    table.string('lesson');
    table.string("button");
    table.string('color');
    table.json('lectures');
    table.string('background');
    table.dateTime('created_at');
    table.dateTime('updated_at');

  })
  .createTable('our_partners_en', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image').notNullable();
    table.text('text').notNullable();
    table.dateTime('created_at');
  })
  .createTable('our_team_en', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('image');
    table.text('text');
    table.dateTime('created_at');
    table.dateTime('updated_at');

  })
  .createTable('about_en', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('image').notNullable();
    table.text('text');
    table.text('more');
    table.dateTime('created_at');
    table.dateTime('updated_at');

  })
  .createTable('questions_en', (table) => {
    table.increments('id').primary();
    table.text('question');
    table.specificType('incorrectAnswer','text[]');
    table.string('lesson');
    table.text('correctAnswer');
    table.string('background');
    table.specificType('button','text[]')
    table.dateTime('created_at');
    table.dateTime('updated_at');

  })


  .createTable('satelite_en', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.specificType('text1', 'text[]');
    table.string('animationCubeSat1');
    table.specificType('text2', 'text[]');
    table.specificType('margin_text1', 'text[]');
    table.string('animationCubeSat2');
    table.specificType('text3', 'text[]');
    table.specificType('margin_text2', 'text[]');
    table.specificType('text4', 'text[]');
    table.specificType('margin_text3', 'text[]');
    table.string('animationCubeSat3');
    table.specificType('text5', 'text[]');
    table.string('animationCubeSat4');
    table.string('background');
    table.specificType('margin_text4', 'text[]');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  })

  .createTable('satellite_questions_en', (table) => {
    table.increments('id').primary();
    table.text('question');
    table.specificType('incorrectAnswer','text[]');
    table.specificType('button','text[]');
    table.string('lesson');
    table.text('correctAnswer');
    table.string('background');
    table.dateTime('created_at');
    table.dateTime('updated_at');

  })


}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await up(pg);
    console.log('Successfully created all tables ... ');
    process.kill(process.pid);
    
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();