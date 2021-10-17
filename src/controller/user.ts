import { NextFunction, Request, Response } from "express"
import Role from "../model/Role";
import User from "../model/User";
export const userController = {
    getUser: async (req: Request, res: Response) => {
        try {
            const user: User[] = await User.findAll({
                attributes: ['name', 'username', 'password', 'mobilenumber', 'role_id']
            })
            res.status(200).send({
                user
            })

        } catch (e) {
            res.status(500).send(e);
            console.log('Error:', e);
        }
    },
    getUserDetails: async (req: Request, res: Response, next: NextFunction) => {
        User.findAll({ include: [Role] })
            .then(users => res.json(users))
            .catch(next)
    }
}