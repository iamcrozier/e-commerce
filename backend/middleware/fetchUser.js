import jwt from "jsonwebtoken";

// Creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("token");

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized. Please log in again.",
    });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid token." });
  }
};

export default fetchUser;
