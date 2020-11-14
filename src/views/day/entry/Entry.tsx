import React from 'react'
import Markdown from 'react-markdown'
import moment from 'moment'
import { Entry } from './Entry.hooks'
import { EntryViewRoot, Timestamp } from './Entry.components'

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

  return (
    <EntryViewRoot>
      <Timestamp>{timestamp(entry.timestamp)}</Timestamp>
      <Markdown children={entry.body}/>
    </EntryViewRoot>
  )
}