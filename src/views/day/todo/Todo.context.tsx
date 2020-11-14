import React, { createContext, FC, useState } from 'react'
import { Todo } from './Todo.hooks'

type ITodoContext = [Todo[], (todos: Todo[]) => void]

export const TodoContext = createContext<ITodoContext>([[], () => {}])

export const TodoProvider: FC = ({ children }) => {
  const context = useState<Todo[]>([])
  return (
    <TodoContext.Provider value={context}>
      {children}
    </TodoContext.Provider>
  )
}