import ProductModel from "../models/ProductModel.js";

const newCollection = async (req, res) => {
  let products = await ProductModel.find({});
  //let newcollection = products.slice(1).slice(-8);
  let newcollection = products.slice(-8);

  res.send(newcollection);
};

const popularCollection = async (req, res) => {
  let products = await ProductModel.find({});
  //let popular_in_collection = products.slice(1).slice(0, 4);
  let popular_in_collection = products.slice(0, 4);
  res.send(popular_in_collection);
};

export { newCollection, popularCollection };
