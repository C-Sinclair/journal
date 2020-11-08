import { User } from "@supabase/gotrue-js/dist/main/lib/types";
import { createContext, Dispatch, SetStateAction } from "react";

export type IAuthContext = [
  User | null,
  Dispatch<SetStateAction<User>>
]

export const AuthContext = createContext<IAuthContext>([null, () => { }])

