import { NextFunction, Request, Response } from "express"
import Card from "../model/Card";
// import User from "../model/User";
export const cardController = {
    getCard: async (req: Request, res: Response) => {
        try {
            const card: Card[] = await Card.findAll({
                attributes: ['name']
            })
            res.status(200).send({
                card
            })

        } catch (e) {
            res.status(500).send(e);
            console.log('Error:', e);
        }
    }
}