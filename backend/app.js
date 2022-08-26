const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");

const app = express();

//Middlewares
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.wqqdhiy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Databse Connected Successfull"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
