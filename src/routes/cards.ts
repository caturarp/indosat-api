import { Router, Request, Response } from "express";
import { cardController } from "../controller/card";
export const cards = Router();

cards.get('/', cardController.getCard);
