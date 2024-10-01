import express from "express";
import { userSchema } from "../utils/zodSchemas.js";
import User from "../db/models/User.js";
import { generateAccessToken } from "../utils/authUtils.js";
const authRoutes = express.Router();

authRoutes.use(express.json());

authRoutes.post("/signup", async (req, res) => {
	const { name, email, password, confirmPassword } = req.body;

	const result = userSchema.safeParse({
		name,
		email,
		password,
		confirmPassword,
	});

	if (!result.success) {
		res.json(result.error.errors);
		res.status(400);
		return;
	}

	// create user in database if not already existing
	try {
		const user = await User.findOne({ email: email });

		if (user) {
			res.status(409);
			res.json({ code: "userExists", message: "User already exists" });
			return;
		} else {
			const newUser = new User({
				name: name,
				email: email,
				password: password,
			});

			newUser.save();
			const tokenData = {
				id: newUser._id,
				name: newUser.name,
				email: newUser.email,
				isAdmin: newUser.isAdmin,
			};
			const token = generateAccessToken(tokenData);
			res.status(201);
			res.json({
				token: token,
				code: "userCreated",
				message: "User created successfully",
			});
			return;
		}
	} catch (err) {
		console.log(err);
		res.status(500);
		res.json({ code: "err", message: "Something went wrong" });
		return;
	}
});

authRoutes.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email }, {});
		if (!user) {
			res.status(404);
			res.json({ code: "userNotFound", message: "User not found" });
			return;
		}

		if (user.password !== password) {
			res.status(401);
			res.json({ code: "invalidPassword", message: "Invalid password" });
			return;
		}

		const token = generateAccessToken({
			id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
		res.status(200);
		res.json({ token, code: "loginSuccess", message: "Login successful" });
		return;
	} catch (err) {
		console.log(err);
		res.status(500);
		res.json({ code: "err", message: "Something went wrong" });
		return;
	}
});

export default authRoutes;
