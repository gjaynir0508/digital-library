import e from "express";
import {
	authenticateTokenMiddleware,
	isAdminMiddleware,
} from "../utils/authUtils.js";

const protectedTestRoutes = e.Router();

protectedTestRoutes.use(e.json());

protectedTestRoutes.get("/", authenticateTokenMiddleware, (req, res) => {
	res.send(`Hello ${req.user.name}`);
});

protectedTestRoutes.get(
	"/admin",
	authenticateTokenMiddleware,
	isAdminMiddleware,
	(req, res) => {
		res.send(`Hello admin ${req.user.name}`);
	}
);

export default protectedTestRoutes;
