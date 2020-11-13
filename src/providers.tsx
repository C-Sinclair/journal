import React, { FC } from 'react'
import { AuthProvider } from './auth'
import { RouteProvider } from './routing'
import { GlobalStyles, ThemeProvider } from './views'

export const Providers: FC<{}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouteProvider>
          <GlobalStyles />
          {children}
        </RouteProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}