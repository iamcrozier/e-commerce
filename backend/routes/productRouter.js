import express from "express";
import {
  addProduct,
  getAllProduct,
  removeProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/addproduct", addProduct);
productRouter.post("/removeproduct", removeProduct);
productRouter.get("/allproducts", getAllProduct);

export default productRouter;
