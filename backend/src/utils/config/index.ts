import * as dotenv from "dotenv";

dotenv.config();
export const config = {
  port: process.env.PORT,
  db: process.env.DB || "mongodb://localhost:27017/characters",
  secret: "secreto",
};
