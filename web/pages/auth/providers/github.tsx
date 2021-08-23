import { useEffect } from "react";
import { serverUrl } from "~/constants/global";

async function get(code: string) {
  const result = await fetch(`${serverUrl}/api/auth/github/callback?code=${code}`, {
    method: "get",
  }).then((v) => v.json());
  if (result.error) return;

  if (result.accessToken)
    localStorage.setItem("accessToken", result.accessToken);
  if (result.refreshToken)
    localStorage.setItem("refreshToken", result.refreshToken);

  window.location.href = "/";
}

const GithubAuth: React.FC = () => {
  if (typeof window === "undefined") return null;
  const query = new URLSearchParams(window.location.search);

  useEffect(() => {
    if (!query || !query.has("code")) return;
    get(query.get("code"));
  }, [query]);

  return <div>Loading...</div>;
};

export default GithubAuth;
