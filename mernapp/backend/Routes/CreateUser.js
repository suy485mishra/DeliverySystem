import Express from "express";
import User from "../models/User.js";
const router = Express.Router();

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "testname1",
      password: "123456",
      email: "sampletest@gmail.com",
      location: "testsite",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false })
  }
});

export default router
