import { NextFunction, Request, Response } from "express"
import Methodology from "../model/Methodology"
export const methodologyController = {
    getMethodology: async (req: Request, res: Response) => {
        try {
            const methodology: Methodology[] = await Methodology.findAll({
                attributes: ['name']
            })
            res.status(200).send({
                methodology
            })

        } catch (e) {
            res.status(500).send(e);
            console.log('Error:', e);
        }
    }
    // ,
    // getUserDetails: async (req: Request, res: Response, next: NextFunction) => {
    //     User.findAll({ include: [Role] })
    //         .then(users => res.json(users))
    //         .catch(next)
    // }
}