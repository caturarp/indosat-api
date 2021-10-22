import { Router, Request, Response } from "express";
import { roleController } from "../controller/role";

export const roles = Router();

roles.get('/', roleController.getRole)
// roles.get('/', async (req: Request, res: Response) => {
//     try {
//         const role: Role[] = await Role.findAll({
//             attributes: ['name']
//         })
//         res.status(200).send({
//             role
//         })

//     } catch (e) {
//         res.status(500).send(e);
//         console.log('Error:', e);
//     }
// }
// )