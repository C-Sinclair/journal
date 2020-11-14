import React, { useState } from 'react'
import { supabase } from '../../../supabase'
import { TodoViewRoot, Checkbox, TodoBody, Delete } from './Todo.components'
import { Todo } from './Todo.hooks'

interface TodoViewProps {
  todo: Todo
}

export const TodoView = ({ todo }: TodoViewProps) => {
  const [checked, setChecked] = useState(!!todo.completed)

  const toggle = async () => {
    setChecked(!checked)
    await supabase
      .from('Todos')
      .update({ completed: todo.completed ? null : new Date() })
      .match({ id: todo.id })
  }

  const onDeleteClick = async () => {
    await supabase
      .from('Todos')
      .delete()
      .match({ id: todo.id })
  }

  return (
    <TodoViewRoot>
      <Checkbox 
        type='checkbox'
        checked={checked}
        onChange={toggle} 
      />
      <TodoBody>{todo.body}</TodoBody>
      <Delete onClick={onDeleteClick} />
    </TodoViewRoot>
  )
}