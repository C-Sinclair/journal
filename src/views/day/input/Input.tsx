import React, { ChangeEvent, useState, KeyboardEvent } from 'react'
import { useCurrentUser } from '../../../auth'
import { supabase } from '../../../supabase'
import { Day } from '../Day.hooks'
import { useTodos } from '../todo/Todo.hooks'
import { InputContainer, Input, Add } from './Input.components'

interface TodoInputProps {
  day: Day
}

export const TodoInput = ({ day }: TodoInputProps) => {
  const [value, setValue] = useState("")
  const [user] = useCurrentUser()
  const { fetchTodos } = useTodos()

  const create = async (value: string) => {
    try {
      if (!user) {
        throw new Error("User must be logged in to leave todos")
      }
      await supabase
        .from('Todos')
        .insert({
          user_id: user.id,
          body: value,
          day_id: day.id,
        })
      setValue("")
      fetchTodos()
    } catch (error) {
      console.error(error)
    }
  }

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value)

  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit()
    }
  } 
  
  const submit = () => value.length > 0 && create(value)

  return (
    <InputContainer>
      <Input 
        value={value}
        onChange={onChange}
        onKeyDown={onKeydown}
      /> 
      <Add onClick={submit} />
    </InputContainer>
  )
}