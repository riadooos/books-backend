import mongoose from "mongoose";
import { userSchema } from "../models/userModel";

const Util = mongoose.model("Util", userSchema);

export const register = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name) return res.json({ error: "Name is required" });
    if (!password || password.length < 6)
      return res.json({
        error: "Veuillez remplir la case Password avec min 6 caractéres",
      });
    res.json({ data: "This is register EndPoint" });
  } catch (err) {
    console.log(err);
  }
};

export const test2 = (req, res) => {
  res.send("This is test 2");
};
