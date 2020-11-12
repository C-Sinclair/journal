import React, { FC } from 'react'
import { AuthProvider } from './auth'
import { RouteProvider } from './routing'

export const Providers: FC<{}> = ({ children }) => {
  return (
    <AuthProvider>
      <RouteProvider>
        {children}
      </RouteProvider>
    </AuthProvider>
  )
}