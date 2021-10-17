import { Router, Request, Response } from "express";
import { userController } from "../controller/user";
export const users = Router();

// users.get('/', async (req: Request, res: Response) => {
//   try {
//     const user: User[] = await User.findAll({
//       attributes: ['name', 'username', 'password']
//     })
//     res.status(200).send({
//       user
//     })

//   } catch (e) {
//     res.status(500).send(e);
//     console.log('Error:', e);
//   }
// }
// )
users.get('/', userController.getUser);