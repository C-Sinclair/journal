import React, { useState, FC, createContext } from "react";
import { User } from "@supabase/gotrue-js/dist/main/lib/types";

export type IAuthContext = [
  User | null,
  (user: User) => void
]

export const AuthContext = createContext<IAuthContext>([null, () => { }])

const AUTH_STORAGE_KEY = "jrnl-usr"

interface AuthProviderProps {
  loggedIn?: User
}

export const AuthProvider: FC<AuthProviderProps> = ({ children, loggedIn }) => {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY)
  const initialState = loggedIn || (stored ? JSON.parse(stored) : null) as User | null
  const [user, setUser] = useState<User | null>(initialState)

  const userSetter = (user: User) => {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
    setUser(user)
  }
  const auth: IAuthContext = [user, userSetter]

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}