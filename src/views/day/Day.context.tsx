import React, { createContext, FC, useState } from 'react'
import { Day } from './Day.hooks'

type IDayContext = [(Day | null), (day: Day) => void]

export const DayContext = createContext<IDayContext>([null, () => {}])

export const DayProvider: FC = ({ children }) => {
  const context = useState<Day | null>(null)
  return (
    <DayContext.Provider value={context}>
      {children}
    </DayContext.Provider>
  )
}