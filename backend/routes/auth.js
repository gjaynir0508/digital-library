import express from "express";
import { userSchema } from "../utils/zodSchemas";
import User from "../db/models/User";
import { generateAccessToken } from "../utils/authUtils";
const authRoutes = express.Router();

authRoutes.use(express.json());

authRoutes.post("/signup", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const result = userSchema.safeParse({
    name,
    email,
    password,
    confirmPassword,
  });

  if (!result.success) {
    res.json(result.error.format());
  }

  // create user in database if not already existing
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      res.status(500);
      res.json({ code: "err", message: "Something went wrong" });
    }
    if (user) {
      res.status(409);
      res.json({ code: "userExists", message: "User already exists" });
    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });

      newUser.save();

      const token = generateAccessToken(newUser);
      res.status(201);
      res.json({
        token: token,
        code: "userCreated",
        message: "User created successfully",
      });
    }
  });
});

authRoutes.post("/login", (req, res) => {
  res.send("login");
});

export default authRoutes;
