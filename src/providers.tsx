import React, { FC } from 'react'
import { AuthProvider } from './auth'
import { RouteProvider } from './routing'
import { GlobalStyles, ThemeProvider } from './views'
import { DayProvider } from './views/day/Day.context'
import { EntryProvider } from './views/day/entry/Entry.context'
import { TodoProvider } from './views/day/todo/Todo.context'

export const Providers: FC<{}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouteProvider>
          <GlobalStyles />
          <DayProvider>
            <TodoProvider>
              <EntryProvider>
                {children}
              </EntryProvider>
            </TodoProvider>
          </DayProvider>
        </RouteProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}