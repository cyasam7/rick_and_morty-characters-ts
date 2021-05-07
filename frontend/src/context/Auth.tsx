import axios from "axios";
import React, { useEffect /* , useState */ } from "react";
/* import Cookies from "js-cookie";
import { IUser } from "../types/types"; */

const AuthContext = React.createContext<any>(null);

export const AuthProvider: React.FC = ({ children }) => {
  /* const [User, setUser] = useState<IUser | undefined>(undefined);
  const [Jwt, setJwt] = useState("");
  const [Auth, setAuth] = useState(false); */

  useEffect(() => {
    (async () => {
      const { data }: any = await axios.get("/csrf-token");
      axios.defaults.headers.post["X-CSRF-Token"] = data.csrfToken;
    })();
  }, []);

  const LogIn = async () => {
    await axios.get("http://localhost:3001/sign-in");
  };
  const LogOut = () => {};

  const value = {
    LogIn,
    LogOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("Algo chido");
  }
  return context;
};
