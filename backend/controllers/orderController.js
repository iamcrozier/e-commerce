import orderModel from "../models/ordermodel.js";
import UserModel from "../models/UserModel.js";

// Stripe integration
//const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//placing user order for frontend
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      paymentType: req.body.paymentType,
    });
    await newOrder.save();

    if (!(req.body.paymentType === "cod")) {
      const line_item = req.body.items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: item.new_price,
        },
        quantity: item.quantity,
      }));

      line_item.push({
        price_data: {
          currency: "inr",
          product_data: {
            name: "Delivery Charges",
          },
          unit_amount: 40,
        },
        quantity: 1,
      });

      // const session = await stripe.checkout.sessions.create({
      //   line_items: line_item,
      //   mode: "payment",
      //   success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      //   cancel_url: `${frontend_url}/verify?success=falsee&orderId=${newOrder._id}`,
      // });

      //res.json({ success: true, session_url: session.url });

      const success_url = `/verify?success=false&orderId=${newOrder._id}`;
      res.json({ success: true, session_url: success_url });
    } else {
      await UserModel.findByIdAndUpdate(req.body.userId, {
        cartData: {},
      });

      const success_url = `/myorders`;
      res.json({ success: true, session_url: success_url });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// API for verifying order

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// user orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, userOrders };
