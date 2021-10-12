import {createServer} from 'http';
import {app} from './index';
import {sequelize} from './instance/sequelize';
// import * as dotenv from "dotenv";

// dotenv.config();
const port = process.env.PORT || 9951;

    (async () => {
        // const db = await sequelize.sync({force: true});
        await sequelize.sync({force: true});
    //   console.log(db)
        createServer(app)
          .listen(
            port,
            () => console.info(`Server running on port ${port}`)
          );
      })();

// sequelize.authenticate().then(() => {
//   console.log("Connection has been established successfully.");
// })
// .catch((err) => {
//   console.error("Unable to connect to the database:", err);
// });