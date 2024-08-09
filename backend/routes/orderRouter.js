import express from "express";
import fetchUser from "../middleware/fetchUser.js";
import {
  placeOrder,
  verifyOrder,
  userOrders,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", fetchUser, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", fetchUser, userOrders);

export default orderRouter;
