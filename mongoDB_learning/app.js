const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// for working with mongoose , we need to create a schema & its a data shape & if any data we want to save in data base then this data save this type o shape..
let Schema = mongoose.Schema;
let testSchema = new Schema({
  name: String,
  phone: Number,
  emails: String,
});

//then we need to make a model for mongoose where we need to tell that which data model use which schema like under ,,here we work with a single schema..

// here this test variable work like a class & we want to use this model then we need to call it like a class , just like under..

let Test = mongoose.model("testModel", testSchema);

app.get("/", (req, res) => {
  //Here we use this model and in this model we need to pass our data by following schema which we use this model
  let test = new Test({
    name: "ziahan",
    phone: 01983774554,
    emails: "mzmziahaala@gmail.com"
  });
  //for saving this data we need to use this "save" fn & its return a promise
  test
    .save()
    .then((t) => {
      res.json(t);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({
        error: "error occurs",
      });
    });
});

const PORT = process.env.PORT || 8080;

mongoose
  .connect("mongodb+srv://mezbah:45406331@cluster0.pn01s.mongodb.net/test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`The server is running on port - ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
