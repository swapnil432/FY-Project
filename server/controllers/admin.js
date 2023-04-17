import jwt from "jsonwebtoken";
import Admin from "../models/admin";

const JWT_SECRET = "34513HJKK34IJKBKHN9429GBJUND3JDQLL";

export const login = (req, res) => {
  const { email, password } = req.body;
  Admin.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    const isValidPassword = user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: "1D" });
    return res.status(200).json({
      messsage: "Welcome",
      token: token,
    });
  });
};