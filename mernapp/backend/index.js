import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
mongoose.connect(
    "mongodb+srv://mishrasuyash411:z8b6CG4iQQ9fZ7VH@cluster0.k7ae3fa.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=>app.listen(3010))
.then(()=>console.log('connected to port'))
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err));