import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "./constants";
// import { serverUrl } from "~/constants/global";

export const AuthContext = createContext({
  user: null,
  user_id: null,
  loggedIn: false,
  serverPresent: false,
});
async function getData(id: string): Promise<any> {
  let resp;
  await axios.get(`${serverUrl}/api/auth/getUser`, {
    headers: {
      "Authorization": `bearer ${id}`,
      "Access-Control-Allow-Origin": "http://localhost:8000"
    },
  }).then(async (e) => {resp = await e.data})

  return resp;
}

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [serverPresent, setserverPresent] = useState(null);

  useEffect(() => {
    let id = localStorage.getItem("accessToken");
    console.log(id)
    if (id !== null) {
      setUserId(id);
      getData(id)
        .then((resp) => {
          setUser(resp);
          setLoggedIn(true);
          console.log(resp)
          setserverPresent(true);
        })
        .catch((e) => {
          console.error(e);
          setserverPresent(false);
        });
    } else {
      setLoggedIn(false);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user_id: userId,
        user,
        loggedIn: loggedIn,
        serverPresent: serverPresent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
