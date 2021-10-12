//external modules
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {itemsRouter} from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import {sequelize} from './instance/sequelize';
import {users} from "./routes/users"


dotenv.config();

// env variables

if (!process.env.PORT) {
    process.exit(1);
}
 
const PORT: number = parseInt(process.env.PORT as string, 10);
 
export const app = express();

//app config

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/menu/items", itemsRouter)
app.use("/users", users )
app.use(errorHandler);
app.use(notFoundHandler);
//server activation

// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
// });
// (async () => {
//     await sequelize.sync({force: true});
//   console.log("connected")
//   //   createServer(app)
//   //     .listen(
//   //       port,
//   //       () => console.info(`Server running on port ${port}`)
//   //     );
//   })();