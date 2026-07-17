import express from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import { currentUserRouter } from "./routes/current-user.js";
import { signinRouter } from "./routes/signin.js";
import { signoutRouter } from "./routes/signout.js";
import { signupRouter } from "./routes/signup.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { NotFoundError } from "./errors/not-found-errors.js";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all("*", async(req, res, next) => {
  next(new NotFoundError())
})

app.use(errorHandler);

const start = async()=>{
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth")
    console.log("connected to mongodb")
  } catch (error) {
    console.log(error)
  }
  
  app.listen(3000, () => {
    console.log("Auth Service Listening at port 3000!!!!!!!!!!!!!!!!!!!");
  });
}

start()
