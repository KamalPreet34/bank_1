const { connection } = require("./db");
const express = require("express");
const {userRouter}=require("./routes/user.route")
const { moderatorRouter}=require("./routes/moderator.route")
const app = express();
app.use(express.json());
app.use("/moderator",moderatorRouter )
app.use('/user',userRouter)
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
});
