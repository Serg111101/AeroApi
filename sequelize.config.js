import config from './src/config/variables.config';

const { PSQL } = config;

const {
  PORT, HOST, DATABASE, USER, PASSWORD
} = PSQL;

export default {
    "development": {
      "username": USER,
      "password": PASSWORD,
      "database": DATABASE,
      "host": HOST,
      "port":PORT,
      "dialect": "pg"
    },
    "test": {
        "username": USER,
        "password": PASSWORD,
        "database": DATABASE,
        "host": HOST,
        "port":PORT,

        "dialect": "pg"
    },
    "production": {
        "username": USER,
        "password": PASSWORD,
        "database": DATABASE,
        "host": HOST,
        "port":PORT,

        "dialect": "pg"
    }
  }
  