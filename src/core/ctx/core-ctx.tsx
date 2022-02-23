import axios, { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../common/hooks/use-locastorage";
import { Api } from "../config/api";
import { AuthDataModel, HttpResponseModel } from "../types/models";

export const CoreCtx = createContext({} as any);

export const CoreCtxProvider = ({ children }: any) => {
  const [loggedin, setLoggedin] = useState(false);

  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = token;
    setLoggedin(token ? true : false);
  }, [token]);

  const logIn = async (ev: AuthDataModel) => {
    try {
      const resp: AxiosResponse<HttpResponseModel> = await axios.post(
        Api.LOGIN_END_POINT,
        ev
      );
      setLoggedin(true);
      setToken(resp.data.accessToken);
    } catch (error) {
      debugger;
    }
  };

  const logOut = () => {
    setToken("");
  };

  return (
    <CoreCtx.Provider value={{ logIn, loggedin, logOut }}>
      {children}
    </CoreCtx.Provider>
  );
};
