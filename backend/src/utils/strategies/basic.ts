import passport from "passport";
import { BasicStrategy } from "passport-http";
import { ServicesUser } from "../../services/User";
import boom from "@hapi/boom";
import bcrypt from "bcrypt";
import { IUser } from "../../models/User";

passport.use(
  new BasicStrategy(async (username, password, cb) => {
    try {
      const servicesUser = new ServicesUser();
      const user = <IUser>await servicesUser.searchByEmail(username);
      if (!user) {
        return cb(boom.unauthorized("No existe el usuario"));
      }
      const isEqual = bcrypt.compareSync(password, user.password);
      if (!isEqual) {
        return cb(boom.unauthorized("Contraseña incorrecta"));
      }
      return cb(null, user);
    } catch (error) {
      cb(error);
    }
  })
);
