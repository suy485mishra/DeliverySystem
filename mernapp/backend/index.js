import  Express  from 'express';
import {mongoDB} from './db.js';
import router from './Routes/CreateUser.js';

const app = Express();
const port = 3010;

mongoDB();

app.use('/api', router)
app.use(Express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port,()=>{
  console.log(`listening to ${port}`)
})