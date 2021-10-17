import { Router, Request, Response } from "express";
import Role from "../model/Role";

export const roles = Router();

roles.get('/', async (req: Request, res: Response) => {
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
)