import { NextFunction, Request, Response } from "express"
import Role from "../model/Role";
export const roleController = {
    getRole: async (req: Request, res: Response) => {
        try {
            const role: Role[] = await Role.findAll({
                attributes: ['name']
            })
            res.status(200).send({
                role
            })
    
        } catch (e) {
            res.status(500).send(e);
            console.log('Error:', e);
        }
    }
    // getUserDetails: async (req: Request, res: Response, next: NextFunction) => {
    //     User.findAll({ include: [Role] })
    //         .then(users => res.json(users))
    //         .catch(next)
    // }
}