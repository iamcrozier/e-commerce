import UserModel from "../models/UserModel.js";

const addToCart = async (req, res) => {
  let userData = await UserModel.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await UserModel.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.json({ success: true, message: "Added" });
};

const removeFromCart = async (req, res) => {
  let userData = await UserModel.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
    await UserModel.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
  }

  res.json({ success: true, message: "Removed" });
};

const getCart = async (req, res) => {
  let userData = await UserModel.findOne({ _id: req.user.id });
  res.json(userData.cartData);
};

export { addToCart, removeFromCart, getCart };
