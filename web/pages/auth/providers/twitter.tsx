import axios from "axios";
import React, { useEffect } from "react";
import { serverUrl } from "../../../utils/constants";

async function get(provider: string, token: string, verifier: string) {
  const result = await axios
    .get(
      `${serverUrl}/api/auth/callback/${provider}?oauth_token=${token}&oauth_verifier=${verifier}`
    )
    .then((v) => v.data)
    .catch((v) => ({ error: v }));
  if (result.error) return console.log(result.error);

  if (result.accessToken)
    localStorage.setItem("accessToken", result.accessToken);
  if (result.refreshToken)
    localStorage.setItem("refreshToken", result.refreshToken);

  window.location.href = "/";
}

const Auth: React.FC = () => {
  const loading = (
    <div className="w-screen h-screen flex justify-center items-center text-black">
      Loading...
    </div>
  );

  if (typeof window === "undefined") return loading;
  const query = new URLSearchParams(window.location.search);

  useEffect(() => {
    if (!query || !query.has("oauth_token") || !query.has("oauth_verifier"))
      return;
    console.log(query.get("oauth_token"), " ", query.get("oauth_verifier"));
    get("twitter", query.get("oauth_token"), query.get("oauth_verifier"));
  }, [query]);

  return <div>asdouasd</div>;
};

export default Auth;
