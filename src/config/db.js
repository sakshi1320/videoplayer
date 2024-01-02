const mongoose = require("mongoose");
const DB_URI = "mongodb+srv://sakshi13:Sakshi%40100@cluster0.22zds3k.mongodb.net/videoplayer";
const connectionParams = {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
};
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, connectionParams);
    console.log("database connect");
  } catch (error) {
    console.log("erroe in connection" + error.message);
  }
};
module.exports = connectDB;
