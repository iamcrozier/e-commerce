import UserModel from "../models/UserModel.js";

const addToCart = async (req, res) => {
  try {
    let userdata = await UserModel.findById({ _id: req.body.userId });
    let cartData = await userdata.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await UserModel.findByIdAndUpdate({ _id: req.body.userId }, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userData = await UserModel.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await UserModel.findByIdAndUpdate({ _id: req.body.userId }, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

const getCart = async (req, res) => {
  try {
    let userData = await UserModel.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    res.json({ success: true, data: cartData });
  } catch (error) {
    res.json({ success: false, message: "Error" + error });
  }
};

export { addToCart, removeFromCart, getCart };
