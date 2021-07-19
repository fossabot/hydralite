import Meta from "partials/Meta";
import React from "react";
import { useRouter } from "next/router";
import Home from "~/pages/project/[id]/home";

// redirects user to /home if they end up on /
const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id !== undefined && typeof window !== "undefined")
    router.replace(`./${id}/home`);
  return <Home />;
};

export default Project;
