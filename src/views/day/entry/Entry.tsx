import React, { ChangeEvent, useState } from 'react'
import Markdown from 'react-markdown'
import moment from 'moment'
import { Entry } from './Entry.hooks'
import { EntryViewRoot, Timestamp, TextareaContainer } from './Entry.components'
import { useEditable } from '../../shared/Editable/Editable.hooks'
import { useCurrentUser } from '../../../auth'
import { useDay } from '../Day.hooks'
import { supabase } from '../../../supabase'

interface EntryViewProps {
  entry: Entry
}

const timestamp = (date: Date) => {
  const d = moment(date)
  if (d.diff(moment(), "days") > 0) {
    return d.format("HH:mm:ss")
  } else {
    return d.fromNow()
  }
}

export const EntryView = ({ entry }: EntryViewProps) => {
  const [body, setBody] = useState(entry.body)
  const { ref, editing, setEditing } = useEditable()
  const [user] = useCurrentUser()
  const { day } = useDay()

  const onClick = () => setEditing(true)

  const onChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => setBody(target.value)

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
        .update({ body })
      setEditing(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <EntryViewRoot ref={ref} onClick={onClick}>
      <Timestamp>
        {timestamp(entry.timestamp)}
      </Timestamp>
      {editing ? (
        <TextareaContainer>
          <textarea
            value={body} 
            onChange={onChange}
          />
          <button
            onClick={save}
          >
            Save
          </button>
        </TextareaContainer> 
      ) : (
        <Markdown children={body}/>
      )}
    </EntryViewRoot>
  )
}