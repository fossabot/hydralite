import { serverUrl } from "constantVars";
import { useEffect } from "react";

async function get() {
  const result = await fetch(
    `${serverUrl}/api/token/revoke?accessToken=${localStorage.getItem(
      "accessToken"
    )}`,
    { method: "post" }
  ).then((v) => v.json());
  if (result.error) return;

  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  window.location.href = "/";
}

const LogoutAuth: React.FC = () => {
  if (typeof window === "undefined") return null;
  useEffect(() => {
    get();
  }, []);

  return <div>Loading...</div>;
};

export default LogoutAuth;
