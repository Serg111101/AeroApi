// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function up(pg) {
  return pg.schema
    .createTable('admin', (table) => {
      table.increments('id');
      table.string('login').notNullable().unique();
      table.string('password');
      table.string('fullName');
      table.string('role').notNullable();
      table.string('info');
      table.string('position');
      table.string("school");
      table.specificType("cubesat_link", 'text[]');
      table.dateTime('updated_at');
      table.dateTime('created_at');
    })
    .createTable('header', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('home_page', (table) => {
      table.increments('id').primary();
      table.string('different');
      table.specificType('information', 'jsonb[]').notNullable();
      table.dateTime('created_at');
      table.string('image');
      table.dateTime('updated_at');
    })

    .createTable('contact', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('text');
      table.string('nametext');
      table.string('emailtext');
      table.string('messagetext');
      table.string('sendtext');
      table.string('nameplaceholder');
      table.string('emailplaceholder');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('lessons', (table) => {
      table.increments('id').primary();
      table.string('ikonka');
      table.string('icon');
      table.string('lesson');
      table.string('color');
      table.json('lectures');
      table.string('button');
      table.string('background');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })

    .createTable('topics', (table) => {
      table.increments('id').primary();
      table.text('lesson');
      table.text('lectures');
      table.text('text1');
      table.text('text2');
      table.text('text3');
      table.string('image');
      table.specificType('text_arr', 'text[]');
      table.specificType('text_arr_margin', 'text[]');
      table.specificType('slides', ' text[]');
      table.specificType('button', 'text[]');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })

    .createTable('questions', (table) => {
      table.increments('id').primary();
      table.text('question');
      table.specificType('incorrectAnswer', 'text[]');
      table.string('lesson');
      table.text('correctAnswer');
      table.string('background');
      table.specificType('button', 'text[]');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })

    .createTable('satellite_questions', (table) => {
      table.increments('id').primary();
      table.text('question');
      table.specificType('incorrectAnswer', 'text[]');
      table.specificType('button', 'text[]');
      table.string('lesson');
      table.text('correctAnswer');
      table.string('background');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('about', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('image');
      table.text('text');
      table.text('more');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })

    .createTable('games', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('url').notNullable();
      table.dateTime('created_at');
    })
    .createTable('our_partners', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('image').notNullable();
      table.text('text').notNullable();
      table.dateTime('created_at');
    })
    .createTable('our_team', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('image');
      table.text('text');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('footer', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('text');
      table.string('logo');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('children', (table) => {
      table.increments('id').primary();
      table.integer('teacher_id').unsigned().references('id').inTable('admin');
      table.string('fullName');
      table.text('picture');
      table.integer('bookNumber');
      table.integer('level');
      table.string('classNumber');
      table.string('role').notNullable();
      table.string('login');
      table.string('password');
      table.string("school");
      table.specificType("cubesat_link", 'text[]');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('class', (table)=> {
      table.increments('id');
      table.integer('teacher_id');
      table.string('name');
    })

    .createTable('quiz', (table) => {
      table.increments('id');
      table.integer('children_id').unsigned().references('id').inTable('children');
      table.string('attempts');
      table.string('lesson');
      table.specificType('correct', 'jsonb[]');
      table.specificType('incorrect', 'jsonb[]');
      table.integer('teacher_id'); // Assuming this should be an integer
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })

    .createTable('satelite', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.specificType('text1', 'text[]');
      table.string('animationCubeSat1'); // this is video
      table.specificType('text2', 'text[]');
      table.specificType('margin_text1', 'text[]');
      table.string('animationCubeSat2'); // this is video
      table.specificType('text3', 'text[]');
      table.specificType('margin_text2', 'text[]');
      table.specificType('text4', 'text[]');
      table.specificType('margin_text3', 'text[]');
      table.string('animationCubeSat3'); // this is video
      table.specificType('text5', 'text[]');
      table.string('animationCubeSat4'); // this is video
      table.string('background');
      table.specificType('margin_text4', 'text[]');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    });
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
