import { Router, Request, Response } from "express";
import User from "../model/User";

export const users = Router();

users.get('/', async (req: Request, res: Response) => {
  try {
    const user: User[] = await User.findAll({
      attributes: ['name', 'username', 'password']
    })
    res.status(200).send({
      user
    })

  } catch (e) {
    res.status(500).send(e);
    console.log('Error:', e);
  }
}
)