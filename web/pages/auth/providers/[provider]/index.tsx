import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { serverUrl } from "../../../../utils/constants";

const get = async (provider: string, code: string, state: string) => {
  const result = await fetch(
    `${serverUrl}/api/auth/callback/${provider}?code=${code}&state=${state}`
  )
    .then((v) => v.json())
    .catch((v) => ({ error: v }));
  // if (result.error) return console.log(result.error);

  if (result.accessToken)
    localStorage.setItem("accessToken", result.accessToken);
  if (result.refreshToken)
    localStorage.setItem("refreshToken", result.refreshToken);

  window.location.href = "/";
};

const Auth: React.FC = () => {
  const loading = (
    <div className="w-screen h-screen flex justify-center items-center">
      Loading...
    </div>
  );

  const router = useRouter();
  const { provider } = router.query;

  if (typeof window === "undefined") return loading;
  const query = new URLSearchParams(window.location.search);

  useEffect(() => {
    if (!query || !query.has("code") || !query.has("state")) return;
    if (!provider) return;
    get(provider as string, query.get("code"), query.get("state"));
  }, [query, provider]);

  return loading;
};

export default Auth;
