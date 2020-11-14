import React, { useState, ChangeEvent, FC } from 'react'
import { useCurrentUser } from '../../../auth'
import { supabase } from '../../../supabase'
import { useDay } from '../Day.hooks'
import { useEntries } from '../entry/Entry.hooks'
import { TextareaRoot, Textarea, Button } from './Textarea.components'

export const EntryTextarea: FC = (props) => {
  const [body, setBody] = useState("")
  const [focused, setFocused] = useState(false)
  const [user] = useCurrentUser()
  const { day } = useDay()
  const { fetchEntries } = useEntries()

  const onChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => setBody(target.value)
  const onFocus = (focus: boolean) => () => setFocused(focus)

  const save = async () => {
    try {
      if (!user) {
        throw new Error("User must be logged in")
      }
      if (!day) {
        throw new Error("A Day must be selected")
      }
      await supabase
        .from('Entries')
        .insert({
          user_id: user.id,
          body,
          day_id: day.id,
        })
      setBody("")
      fetchEntries()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TextareaRoot {...props}>
      <Textarea 
        value={body}
        onChange={onChange}
        onFocus={onFocus(true)} 
        onBlur={onFocus(false)} 
      />
      <Button 
        focused={focused} 
        onClick={save}
      >
        Save
      </Button>
    </TextareaRoot>
  )
}