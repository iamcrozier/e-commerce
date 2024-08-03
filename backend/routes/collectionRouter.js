import express from "express";
import {
  newCollection,
  popularCollection,
} from "../controllers/CollectionController.js";

const collectionRouter = express.Router();

collectionRouter.get("/newcollections", newCollection);
collectionRouter.get("/popular", popularCollection);

export default collectionRouter;
