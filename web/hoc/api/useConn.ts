import { useContext } from "react";
import { UseApiConnectionContext } from "./UseApiConnection";

export const useConn = () => {
  return useContext(UseApiConnectionContext).conn as any;
};
