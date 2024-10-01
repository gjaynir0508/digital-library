import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function generateAccessToken(user) {
	return jwt.sign(user, process.env.JWT_SECRET, {
		expiresIn: 60 * 60 * 24 * 7,
	});
}

export function authenticateTokenMiddleware(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token === null || token === undefined || token === "")
		return res.sendStatus(401);

	try {
		const user = jwt.verify(token, process.env.JWT_SECRET);
		req.user = user;
		next();
	} catch (err) {
		console.log(err);
		res.sendStatus(403);
		res.json({ code: "invalidToken", message: "Invalid token" });
		return;
	}
}

export function isAdminMiddleware(req, res, next) {
	const user = req.user;
	if (user.isAdmin) {
		next();
	} else {
		res.sendStatus(403);
	}
}
