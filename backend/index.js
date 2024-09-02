const Express = require("express");

const app = Express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(3000, () => {
	console.log(
		"Server is running on port 3000\nView at http://localhost:3000"
	);
});
