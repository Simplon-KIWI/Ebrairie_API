import { Sequelize } from 'sequelize';
import config from './env';

const sequelize = new Sequelize(
  config.db_name,
  config.db_user,
  config.db_password,
  // for linux users
  // { host: config.db_host, dialect: 'mysql' }
  // for mac users
  { host: config.db_host, dialect: 'mysql', port: config.db_port}
);
const db = { sequelize, Sequelize };
sequelize.sync();
export default db;
