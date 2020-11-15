import React, { FC, useEffect } from 'react'
import moment from 'moment'
import { Root, Title, DateString, DateContainer, SubDate, TodoContainer, EntriesContainer, Content, PreviousDay, NextDay } from './Day.components'
import { useDay } from './Day.hooks'
import { TodoView } from './todo/Todo'
import { EntryView } from './entry/Entry'
import { TodoInput } from './input/Input'
import { EntryTextarea } from './textarea/Textarea'
import { useEntries } from './entry/Entry.hooks'
import { useTodos } from './todo/Todo.hooks'
import { useRouter } from '../../routing/Routing.hooks'

interface DayViewProps {}

const niceFormatDate = (date: Date) => moment(date).format("Do MMMM YYYY")

const subdate = (date: Date) => {
  const d = moment(date).endOf('day')
  console.log("subdate", date, d.diff(moment(), 'weeks'), d.diff(moment(), 'days'))
  if (d.diff(moment(), 'weeks') < 1 && d.diff(moment(), 'days') !== 0) {
    return d.fromNow()
  }
}

export const DayView: FC<DayViewProps> = () => {
  const { day } = useDay()
  const { entries, fetchEntries } = useEntries()
  const { todos, fetchTodos } = useTodos()
  const { navigate } = useRouter()

  useEffect(() => {
    if (day) {
      fetchEntries()
      fetchTodos()
    }
  // eslint-disable-next-line
  }, [day])

  const onPreviousDayClick = () => {
    const previous = moment(day?.date).subtract(1, 'days').toDate()
    navigate({ name: 'Specific Day', date: previous })
  }
  const onNextDayClick = () => {
    const next = moment(day?.date).add(1, 'days').toDate()
    navigate({ name: 'Specific Day', date: next })
  }

  return (
    <Root>
      <Title>
        <PreviousDay onClick={onPreviousDayClick} />
        <h4>{day?.title || "Loading"}</h4>
        <NextDay onClick={onNextDayClick} />
      </Title>

      {day && (
        <>
        <DateContainer>
          <DateString>{niceFormatDate(day.date)}</DateString>
          <SubDate>{subdate(day.date)}</SubDate>
        </DateContainer>
        <EntryTextarea />
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