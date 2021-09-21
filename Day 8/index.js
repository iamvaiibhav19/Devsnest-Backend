const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require("path");
app.set("Views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// const bodyParser = require("body-parser");

// CRUD -> Post , GET , PUT , DELETE
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.get("/", (req, res) => {
// 	res.sendStatus(290);
// 	res.send(req.json);
// });

// app.post("/", (req, res) => {
// 	res.send("Post");
// });
// app.put("/", (req, res) => {
// 	res.send("Put");
// });
app.use("/", (req, res) => {
	// res.sendFile(path.join(__dirname, "public/hello.txt"), "text.txt");
	// res.download(path.join(__dirname, "public/hello.txt"), "text.txt");
	// res.sendFile(path.join(__dirname, "public/getImage.jpg"), "test.jpg");
	// res.download(path.join(__dirname, "public/getImage.jpg"), "text.txt");
	// res.render("index", { title: "Express" });
	res
		.status(201)
		.cookie("toke", "tesr", {
			expires: new Date(Date.now() + 8 * 3600000),
		})
		.cookie("token", "testss")
		.redirect("/");
});
// app.get(
// 	"/admin/:id",
// 	(req, res, next) => {
// 		if (req.params.id === "1") {
// 			next();
// 		} else {
// 			res.send("Not Authorized");
// 		}
// 	},
// 	(req, res) => {
// 		res.send("Admin");
// 	}
// );
app.listen(5000);
