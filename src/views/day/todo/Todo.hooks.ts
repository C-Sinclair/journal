import { useEffect, useState } from "react"
import { supabase } from "../../../supabase"
import { Day } from "../Day.hooks"

export interface Todo {
  id: string
  day_id: string
  completed?: Date
  body: string
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [day, setDay] = useState<Day>()

  const fetchTodosForDay = async (day: Day) => {
    try {
      setDay(day)
      const { data, error } = await supabase
        .from<Todo>('Todos')
        .select('id, body, completed')
        .eq('day_id', day.id)
      if (error) {
        throw error
      }
      setTodos(data || [])
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const sub = supabase
      .from('Todos')
      .on('*', () => {
        if (day) {
          fetchTodosForDay(day)
        }
      })
      .subscribe()
    return () => {
      sub.unsubscribe()
    }
  // eslint-disable-next-line
  }, [])

  return {
    todos,
    fetchTodosForDay
  }
}

export const useCompleteTodo = () => {
  const toggle = ({ id, completed }: Todo) => async () => {
    await supabase
      .from('Todos')
      .update({ completed: completed ? null : new Date() })
      .match({ id })
  }

  return toggle
}