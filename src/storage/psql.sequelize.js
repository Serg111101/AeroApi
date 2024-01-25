import { Model, DataTypes, Sequelize } from 'sequelize';
import { LoggerUtil } from '../utils';

import config from '../config/variables.config';

const { PSQL } = config;

const {
  PORT, HOST, DATABASE, USER, PASSWORD
} = PSQL;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: 'sqlite',
});

class PSQLStorage extends Model {
  static async init() {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      LoggerUtil.info('PSQL Connected with Sequelize...');
    } catch (error) {
      LoggerUtil.error(error.message);
    }
  }
}

PSQLStorage.init(
  {
    // Define model attributes here
  },
  {
    sequelize,
    modelName: 'PSQLStorage',
  }
);

export default PSQLStorage;
