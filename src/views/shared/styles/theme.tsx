import React, { FC } from 'react'
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colours: {
    green: '#0d5f0d',
    dark: '#222',
    darker: '#100e0e',
    darkest: '#111',
    black: '#000',
    white: '#fff',
  }
}

export const ThemeProvider: FC = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    {children}
  </StyledThemeProvider>
)

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: {
      green: string
      black: string
      darkest: string
      darker: string
      dark: string
      white: string
    };
  }
}