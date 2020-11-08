import { useContext } from "react";
import { AuthContext } from "./context";

export const useCurrentUser = () => useContext(AuthContext)