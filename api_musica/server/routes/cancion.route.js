import { Router } from "express";
import ccontrolador from "../controllers/cancion.controller.js";

const cancionrts = Router();
cancionrts.get('/cancion',ccontrolador.getcancion);

export default cancionrts