import { Router,Request, Response } from "express";
// import User from "../model/Role";
import { User } from "../interface/user.interface";

export const users = Router();

users.get('/', async (req: Request, res: Response) =>{
    try {
        // const users: User[] = await ItemService.findAll();
    
        res.status(200).send(users);
      } catch (e) {
        res.status(500).send(e);
        console.log('Error:',e);
      }
}
)