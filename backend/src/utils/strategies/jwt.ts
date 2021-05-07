import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { config } from "../config";
import { ServicesUser } from "../../services/User";
import boom from "@hapi/boom";

export interface IToken {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.secret,
    },
    async (token: IToken, cb) => {
      try {
        const servicesUser = new ServicesUser();

        const user = await servicesUser.searchByEmail(token.email);
        if (!user) {
          return cb(boom.unauthorized());
        }

        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);
