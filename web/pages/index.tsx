import React, { useContext } from "react";
import Skeleton from "../hoc/Skeleton/Skeleton";
import UnauthLanding from "../hoc/UnauthLanding/Landing";
import { AuthContext } from "../utils/auth";

// export default function Home() {
//   return (
//     <UnauthLanding />
// <Skeleton sidebar={true}>
//   <h1>asdasds</h1>
// </Skeleton>
//   );
// }

export default function Home() {
  const { loggedIn } = useContext(AuthContext);
  if (loggedIn !== null) {
    if (loggedIn) {
      return (
        <Skeleton sidebar={true}>
          <h1>asdasds</h1>
        </Skeleton>
      );
    }
    return <UnauthLanding />;
  }
  return <h1>Loading</h1>;
}
