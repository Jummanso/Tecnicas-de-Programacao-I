import { Router } from 'express';
import { UfIbge, UfSigla } from "../controllers/UfController";
const route = Router();

route.get("/uf/sigla/:sigla", UfSigla);
route.get("/uf/ibge/:ibge_cod", UfIbge);

export default route;