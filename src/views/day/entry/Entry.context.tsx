import React, { createContext, FC, useState } from 'react'
import { Entry } from './Entry.hooks'

type IEntryContext = [Entry[], (Entrys: Entry[]) => void]

export const EntryContext = createContext<IEntryContext>([[], () => {}])

export const EntryProvider: FC = ({ children }) => {
  const context = useState<Entry[]>([])
  return (
    <EntryContext.Provider value={context}>
      {children}
    </EntryContext.Provider>
  )
}