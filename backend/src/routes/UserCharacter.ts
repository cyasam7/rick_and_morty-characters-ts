import { Router, Request, Response, NextFunction, Application } from "express";
import passport from "passport";
import { IUserCharacter } from "../models/UserCharacter";
import { ServicesUserCharacter } from "../services/UserCharacters";
import "../utils/strategies/jwt";

function RouterUserCharacter(app: Application) {
  const router = Router();
  app.use("/user-character", router);
  const servicesUserCharacter = new ServicesUserCharacter();

  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req: Request, res: Response, next: NextFunction) => {
      const userChar = <IUserCharacter>req.body;
      try {
        const newUserCharacter = await servicesUserCharacter.addUserCharacter(
          userChar
        );
        res.status(200).json(newUserCharacter);
      } catch (error) {
        next(error);
      }
    }
  );
  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const query = req.query;
        const list = await servicesUserCharacter.listUserCharacter(query);
        res.status(200).json(list);
      } catch (error) {
        next(error);
      }
    }
  );
  router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        await servicesUserCharacter.removeUserCharacter(id);
        res.status(200).json({ message: "Message has been deleted" });
      } catch (error) {
        next(error);
      }
    }
  );
}

export default RouterUserCharacter;
