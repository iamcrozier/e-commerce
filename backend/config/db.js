import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://tomatoserver:tomato1234@cluster0.zutwyh0.mongodb.net/e-commerce"
    )
    .then(() => console.log("Connected to DB"));
};
