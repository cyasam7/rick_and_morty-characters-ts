import { Router, Request, Response, NextFunction, Application } from "express";
import passport from "passport";
import { IUser } from "../models/User";
import { ServicesUser } from "../services/User";
import jwt from "jsonwebtoken";
import { config } from "../utils/config";
import "../utils/strategies/basic";

function RouterAuth(app: Application) {
  const router = Router();
  app.use("/auth", router);
  router.post(
    "/sign-in",
    passport.authenticate("basic", { session: false }),
    (req: Request, res: Response) => {
      const user = <IUser>req.user;

      const payload = {
        sub: user._id,
        email: user.email,
      };
      const token = jwt.sign(payload, config.secret, {
        expiresIn: "15m",
      });

      res.status(200).json({ token, user });
    }
  );

  router.post(
    "/sign-up",
    async (req: Request, res: Response, next: NextFunction) => {
      const servicesUser = new ServicesUser();
      const user = <IUser>req.body;
      try {
        const newUser = await servicesUser.addUser(user);
        res.status(200).json(newUser);
      } catch (error) {
        next();
      }
    }
  );
}

export default RouterAuth;
