// import { create } from 'domain';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  // database: process.env.DB_NAME,
  // host: process.env.DB_HOST,
  // dialect: 'postgres',
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,
  // models: [__dirname + '/model'] // or [Player, Team],
  database: 'indosatapiv1',
  host: 'localhost',
  dialect: 'postgres',
  username: 'postgres',
  password: 'root',
  port: 9951,
  models: [__dirname + '/model'] // or [Player, Team],
})