import React, { FC, useEffect } from 'react'
import moment from 'moment'
import { Root, Title, DateString, DateContainer, SubDate, TodoContainer, EntriesContainer, Content } from './Day.components'
import { useDay } from './Day.hooks'
import { TodoView } from './todo/Todo'
import { EntryView } from './entry/Entry'
import { TodoInput } from './input/Input'
import { EntryTextarea } from './textarea/Textarea'
import { useEntries } from './entry/Entry.hooks'
import { useTodos } from './todo/Todo.hooks'

interface DayViewProps {}

const niceFormatDate = (date: Date) => moment(date).format("Do MMMM YYYY")

const subdate = (date: Date) => {
  const d = moment(date)
  if (d.diff(moment(), 'weeks') < 1 && d.diff(moment(), 'days') > 0) {
    return d.fromNow()
  }
}

export const DayView: FC<DayViewProps> = () => {
  const { day } = useDay()
  const { entries, fetchEntriesForDay } = useEntries()
  const { todos, fetchTodosForDay } = useTodos()

  useEffect(() => {
    if (day) {
      fetchEntriesForDay(day)
      fetchTodosForDay(day)
    }
  // eslint-disable-next-line
  }, [day])

  return (
    <Root>
      <Title>{day?.title || "Loading"}</Title>
      {day && (
        <>
        <DateContainer>
          <DateString>{niceFormatDate(day.date)}</DateString>
          <SubDate>{subdate(day.date)}</SubDate>
        </DateContainer>
        <EntryTextarea day={day} />
        <Content>
          <EntriesContainer>
            <h4>Entries</h4>
            {entries.map(entry => (
              <EntryView entry={entry} key={entry.id} />
            ))}
          </EntriesContainer>
          <TodoContainer>
            <h4>Todos</h4>
            {todos.map(todo => (
              <TodoView todo={todo} key={todo.id} />
            ))}
            <TodoInput day={day} />
          </TodoContainer>
        </Content>
        </>
      )}
    </Root>
  )
}