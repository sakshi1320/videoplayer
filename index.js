var express = require("express");
var cors = require("cors");
var Mongoclient = require("mongodb").MongoClient;
var app = express();
app.get("/connect", (req, res) => {
  Mongoclient.connect("mongodb://127.0.0.1:27017")
    .then(() => {
      res.send("connected with mongodb server succesfully...");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen(5500, () => {
  console.log("app is running");
});