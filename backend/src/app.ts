import express from "express";
import morgan from "morgan";
import cors from "cors";
import csurf from "csurf";
import cookieParser from "cookie-parser";
import RouterLogin from "./routes/Auth";
import RouterUserCharacter from "./routes/UserCharacter";

import "./utils/db/Mongo";
import "./utils/strategies/jwt";

const csrfProttection = csurf({
  cookie: true,
});

/* App */
const app = express();
/* Middlewares */
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* app.use(csrfProttection); */

/* Routes */
RouterLogin(app);
RouterUserCharacter(app);

app.listen(3001, () => {
  console.log("se inicio adios");
});
