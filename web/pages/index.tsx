import React, { useContext } from "react";
import Skeleton from "../hoc/Skeleton/Skeleton";
import UnauthLanding from "../hoc/UnauthLanding/Landing";
import { AuthContext } from "../utils/auth";

const Home: React.FC = () => {
  const { loggedIn } = useContext(AuthContext);
  if (loggedIn !== null) {
    if (loggedIn) {
      return (
        <Skeleton sidebar>
          <h1>asdasds</h1>
        </Skeleton>
      );
    }
    return <UnauthLanding />;
  }
  return <h1>Loading</h1>;
};

export default Home;
