import { Router, Request, Response } from "express";
import { boardController } from "../controller/board";
export const boards = Router();

boards.get('/', boardController.getBoard);
// users.get('/all', boardController.getUserDetails);