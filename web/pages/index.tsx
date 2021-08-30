import Navbar from "../components/Auth/Navbar";
import Sidebar from "../components/Auth/Sidebar/Sidebar";
import UnauthLanding from "../hoc/UnauthLanding/Landing";

export default function Home() {
  return (
    // <UnauthLanding />
    <div className="w-[100vw] h-[100vh] bg-dark-bg overflow-hidden">
       <Navbar /> 
       <div className="h-[93vh] w-full">
          <Sidebar />
       </div>
    </div>
  );
}
