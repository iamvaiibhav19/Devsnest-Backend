var mongoose = require("mongoose");
var mongodb = "mongodb://127.0.0.1/my-database";

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb connection error"));

// db.on("connect", console.log.bind(console, "Mongo connected"));
