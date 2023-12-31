var express = require("express");
const mongoose = require("mongoose");

// mongoose code conection
const connectDB = require("../config/db");
connectDB();

var cors = require("cors");
// var MongoClient = require("mongodb").MongoClient;
var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/allvideo", (req, res) => {
//   MongoClient.connect()
//     .then((obj) => {
//       var database = obj.db("videoplayer");
//       database
//         .collection("allvideo")
//         .find({})
//         .toArray()
//         .then((document) => {
//           res.send(document);
//         })
//         .catch((err) => {
//           console.error("Error fetching data from MongoDB:", err);
//           res.status(500).send("Internal Server Error");
//         });
//     })
//     .catch((err) => {
//       console.error("Error connecting to MongoDB:", err);
//       res.status(500).send("Internal Server Error");
//     });
// });

app.get("/allvideo", async (req, res) => {
  try {
    const database = mongoose.connection;
    const result = await database.collection("allvideo").find({}).toArray();
    res.send(result);
  } catch (err) {
    console.error("Error fetching data from MongoDB:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/signupDetails", async (req, res) => {
  // console.log(req.body, "rrr");
  res.send(req.body);
  var signupDetails = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Password: req.body.Password,
  };
  try {
    const database = mongoose.connection;
    const result = await database.collection("signup").insertOne(signupDetails).find({}).toArray();
    res.send(result);
  } catch (err) {
    console.error("Error fetching data from MongoDB:", err);
    res.status(500).send("Internal Server Error");
  }
  // MongoClient.connect("mongodb://127.0.0.1:27017")
  //   .then((obj) => {
  //     var database = obj.db("videoplayer");
  //     database
  //       .collection("signup")
  //       .insertOne(signupDetails)
  //       .then(() => {
  //         // console.log(signupDetails);
  //         res.send(signupDetails);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

app.get("/login", async (req, res) => {
  // var video_Email = req.params.Email;
  // console.log(video_Email, "rrr");
  try {
    const database = mongoose.connection;
    const result = await database.collection("signup").find({}).toArray();
    res.send(result);
    res.end();
  } catch (err) {
    console.error("Error fetching data from MongoDB:", err);
    res.status(500).send("Internal Server Error");
  }
  // MongoClient.connect("mongodb://127.0.0.1:27017").then((obj) => {
  //   var database = obj.db("videoplayer");
  //   database
  //     .collection("signup")
  //     .find()
  //     .toArray()
  //     .then((document) => {
  //       console.log(document);
  //       res.send(document);
  //       res.end();
  //     });
  // });
});
app.post("/addvideo", async (req, res) => {
  // console.log(req.body);
  var addVideo = {
    title: req.body.Title,
    url: req.body.Url,
  };
  try {
    const database = mongoose.connection;
    const result = await database.collection("allvideo").insertOne(addVideo).find({}).toArray();
    res.send(result);
  } catch (err) {
    console.error("Error fetching data from MongoDB:", err);
    res.status(500).send("Internal Server Error");
  }
  // MongoClient.connect("mongodb://127.0.0.1:27017")
  //   .then((obj) => {
  //     var database = obj.db("videoplayer");
  //     database
  //       .collection("allvideo")
  //       .insertOne(addVideo)
  //       .then((doc) => {
  //         // console.log(addVideo);
  //         res.send(addVideo);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

// app.listen(5500, () => {
//   console.log("app is running on 5000");
// });

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
