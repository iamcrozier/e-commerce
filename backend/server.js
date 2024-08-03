import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRouter.js";
import collectionRouter from "./routes/collectionRouter.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
connectDB();

// API endpoint
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/collection", collectionRouter);

app.get("/", (req, res) => {
  res.send("Express App is running");
});

// Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating upload endpoint for image
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
    console.log("http://localhost:" + port);
  } else {
    console.log("Error " + error);
  }
});
