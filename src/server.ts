import { createServer } from 'http';
import { app } from './index';
import { sequelize } from './instance/sequelize';
import * as Sequelize from 'sequelize-typescript'
// import * as dotenv from "dotenv";
import Role from './model/Role'
import User from './model/User';

// dotenv.config();
const port = process.env.PORT || 9951;

(async () => {
  // const db = await sequelize.sync({force: true});
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  sequelize.addModels([User, Role])
  await sequelize.sync();
  //   console.log(db)
  createServer(app)
    .listen(
      port,
      () => console.info(`Server running on port ${port}`)
    );
})();

