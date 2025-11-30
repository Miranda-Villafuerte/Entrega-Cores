import { Router } from "express";
import pcontrolador from "../controllers/playlist.controller.js";

const playlistrts = Router();
playlistrts.get('/playlist', pcontrolador.getplaylist);

export default playlistrts;