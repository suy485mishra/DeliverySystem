
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const URI =
  "mongodb+srv://mishrasuyash411:z8b6CG4iQQ9fZ7VH@cluster0.k7ae3fa.mongodb.net/mishrasuyash411?retryWrites=true&w=majority";

export const mongoDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected");
    // const fetched_data = await mongoose.connection.db.collection("food_items");
    // const data = await fetched_data.find({}).toArray();
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};
