import { Router, Request, Response } from "express";
import { methodologyController } from "../controller/methodology";
export const methodologies = Router();

methodologies.get('/', methodologyController.getMethodology);
// users.get('/all', boardController.getUserDetails);