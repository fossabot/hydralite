import React, { useEffect } from "react";

const Import: React.FC = () => {
  useEffect(() => {
    window.location = `http://${window.location.host}/projects/createProject${
      window.location.search
    }&provider=${window.location.pathname.split("/")[3]}` as any;
  }, []);
  return (
    <div className="h-screen w-screen flex items-center justify-center text-black">
      Loading
    </div>
  );
};
export default Import;
