import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { supabase } from '../../../supabase'
import { useEditable } from '../../shared/Editable/Editable.hooks'
import { TodoViewRoot, Checkbox, TodoBody, Delete, TodoInputContainer } from './Todo.components'
import { Todo, useTodos } from './Todo.hooks'

interface TodoViewProps {
  todo: Todo
}

export const TodoView = ({ todo }: TodoViewProps) => {
  const { ref: inputRef, editing, setEditing } = useEditable()
  const [checked, setChecked] = useState(!!todo.completed)
  const [body, setBody] = useState(todo.body)

  const { fetchTodos } = useTodos()

  const toggle = async () => {
    setChecked(!checked)
    await supabase
      .from('Todos')
      .update({ completed: todo.completed ? null : new Date() })
      .match({ id: todo.id })
  }

  const onBodyClick = () => setEditing(true)

  const onSaveClick = async () => {
    await supabase
      .from('Todos')
      .update({ body })
      .match({ id: todo.id })
    setEditing(false)
    await fetchTodos()
  }

  const onDeleteClick = async () => {
    await supabase
      .from('Todos')
      .delete()
      .match({ id: todo.id })
    await fetchTodos()
  }

  const onChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => setBody(target.value)

  return (
    <TodoViewRoot>
      {editing ? (
        <TodoInputContainer ref={inputRef}>
          <textarea
            value={body} 
            onChange={onChange}
          />
          <button
            onClick={onSaveClick}
          >
            Save
          </button>
        </TodoInputContainer>
      ) : (
        <>
        <Checkbox 
          type='checkbox'
          checked={checked}
          onChange={toggle} 
        />
        <TodoBody onClick={onBodyClick}>{body}</TodoBody>
        <Delete onClick={onDeleteClick} />
        </>
      )}
    </TodoViewRoot>
  )
}