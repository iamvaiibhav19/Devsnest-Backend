//requiring redis, connect-redis and express-session
const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");

//creating store
const RedisStore = connectRedis(session);

//connecting to redis's server
const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

//error handling
redisClient.on("error", function (err) {
  console.error("could not connect to redis", err);
});

redisClient.on("connect", function () {
  console.log("connected to redis");
});

//exporting here - redisClient, RedisStore, session
module.exports = {
  redisClient,
  RedisStore,
  session,
};
