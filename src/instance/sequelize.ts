// import { create } from 'domain';
import { Sequelize } from 'sequelize-typescript';
// require('dotenv').config({ path: './../../.env' })

// const host = process.env.DB_HOST || "localhost"
// const database = process.env.DB_NAME || "boilerplate"
// const username = process.env.DB_USERNAME || "postgres"
// const password = process.env.DB_PASSWORD || "postgres"
// const port = process.env.DB_PORT || 9951

export const sequelize = new Sequelize({
  database: 'indosat',
  host: 'localhost',
  dialect: 'postgres',
  username: 'postgres',
  password: 'root',
  port: 5432,
  models: [__dirname + '/model'] // or [Player, Team],
})