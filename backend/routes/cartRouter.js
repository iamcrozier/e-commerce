import express from "express";
import fetchUser from "../middleware/fetchUser.js";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/CartController.js";

const cartRouter = express.Router();

cartRouter.post("/addtocart", fetchUser, addToCart);
cartRouter.post("/removefromcart", fetchUser, removeFromCart);
cartRouter.post("/getcart", fetchUser, getCart);

export default cartRouter;
