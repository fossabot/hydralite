import { useEffect } from "react";

export default function Import() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    // console.log(window.location.host)
    window.location = `http://${window.location.host}/projects/createProject${
      window.location.search
    }&provider=${window.location.pathname.split("/")[3]}` as any;
  }, []);
  return (
    <div className="h-screen w-screen flex items-center justify-center text-black">
      Loading
    </div>
  );
}
