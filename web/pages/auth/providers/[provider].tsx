import { useRouter } from "next/router";
import { useEffect } from "react";

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
    if (!query || !query.has("code")) return;
    if (!provider) return;
  }, [query, provider]);

  return loading;
};

export default Auth;
