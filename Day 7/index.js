const express = require("express");
const app = express();
const path = require("path");

// const bodyParser = require("body-parser");

// CRUD -> Post , GET , PUT , DELETE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
	res.sendStatus(290);
	res.send(req.json);
});

app.post("/", (req, res) => {
	res.send("Post");
});
app.put("/", (req, res) => {
	res.send("Put");
});

app.listen(5000);
