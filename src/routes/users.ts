import { Router, Request, Response } from "express";
import { userController } from "../controller/user";
export const users = Router();

users.get('/', userController.getUser);
// idk how to name it, anw below controller is for user+role
users.get('/all', userController.getUserDetails);

// users.post('/', userController.addUser) error