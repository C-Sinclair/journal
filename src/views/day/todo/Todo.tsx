import React, { useState } from 'react'
import { TodoViewRoot, Checkbox, TodoBody } from './Todo.components'
import { Todo, useCompleteTodo } from './Todo.hooks'

interface TodoViewProps {
  todo: Todo
}

export const TodoView = ({ todo }: TodoViewProps) => {
  const [checked, setChecked] = useState(!!todo.completed)

  const toggleCompleted = useCompleteTodo()

  const toggle = () => {
    setChecked(!checked)
    toggleCompleted(todo)
  }

  return (
    <TodoViewRoot>
      <Checkbox 
        type='checkbox'
        checked={checked}
        onChange={toggle} 
      />
      <TodoBody>{todo.body}</TodoBody>
    </TodoViewRoot>
  )
}