import express from "express";
const bookRoutes = express.Router();

bookRoutes.use(express.json())

bookRoutes.get("/", (req, res) => {
  res.send("books");
});

bookRoutes.post("/create", (req, res) => {
  res.send("create books");
});


export default bookRoutes;