import React, { useState, FC, createContext, Dispatch, SetStateAction } from "react";
import { User } from "@supabase/gotrue-js/dist/main/lib/types";

export type IAuthContext = [
  User | null,
  Dispatch<SetStateAction<User>>
]

export const AuthContext = createContext<IAuthContext>([null, () => { }])

export const AuthProvider: FC = ({ children }) => {
  const auth = useState<User | null>(null)

  return (
    <AuthContext.Provider value={auth as IAuthContext}>
      {children}
    </AuthContext.Provider>
  )
}