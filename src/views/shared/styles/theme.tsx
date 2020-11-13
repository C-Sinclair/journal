import React, { FC } from 'react'
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {}

export const ThemeProvider: FC = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    {children}
  </StyledThemeProvider>
)
