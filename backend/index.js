import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/books.js";
import createClient from "./db/dao.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);

app.listen(port, async () => {
  console.log(
    `✅ Backend app listening on port ${port}\nhttp://localhost:${port}`
  );

  console.log("⌚ Connecting to Database ...");
  const client = await createClient();
  console.log("✅ Connected to Database");
});
