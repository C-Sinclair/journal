import React, { useState, ChangeEvent } from 'react'
import { useCurrentUser } from '../../../auth'
import { supabase } from '../../../supabase'
import { Day } from '../Day.hooks'
import { TextareaRoot, Textarea, Button } from './Textarea.components'

interface EntryTextareaProps {
  day: Day
}

export const EntryTextarea = ({ day }: EntryTextareaProps) => {
  const [body, setBody] = useState("")
  const [focused, setFocused] = useState(false)
  const [user] = useCurrentUser()

  const onChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => setBody(target.value)
  const onFocus = (focus: boolean) => () => setFocused(focus)

  const save = async () => {
    try {
      if (!user) {
        throw new Error("USer must be logged in")
      }
      await supabase
        .from('Entries')
        .insert({
          user_id: user.id,
          body,
          day_id: day.id,
        })
      setBody("")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TextareaRoot>
      <Textarea 
        value={body}
        onChange={onChange}
        onFocus={onFocus(true)} 
        onBlur={onFocus(false)} 
      />
      <Button focused={focused} onClick={save}>Save</Button>
    </TextareaRoot>
  )
}