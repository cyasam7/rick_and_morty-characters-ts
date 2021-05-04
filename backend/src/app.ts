import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import "./utils/db/Mongo";
import { Router } from "express";
import jwt from "jsonwebtoken";

const app = express();

/* Middlewares */
app.use(morgan("combined"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Routes */

const router = Router();

router.post("/data", () => {});
router.post("/sign-in", (req: Request, res: Response) => {
  const token = jwt.sign({ token: "1234" }, "hola banda");
  res.cookie("token", token, { httpOnly: true });
  res.json(token);
});

export default router;

app.listen(3000, () => {
  console.log("se inicio adios");
});
