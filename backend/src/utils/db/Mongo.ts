import mongoose from "mongoose";
import { config } from "../config";

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Se conecto la base de datos");
});
connection.once("error", (err) => {
  console.log(err);
  process.exit(0);
});
