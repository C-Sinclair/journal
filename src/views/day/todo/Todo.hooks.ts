import { useContext, useEffect } from "react"
import { supabase } from "../../../supabase"
import { Day, useDay } from "../Day.hooks"
import { TodoContext } from "./Todo.context"

export interface Todo {
  id: string
  day_id: string
  completed?: Date
  body: string
}

export const useTodos = () => {
  const [todos, setTodos] = useContext(TodoContext)
  const { day }  = useDay()

  const fetchTodosForDay = async (day: Day) => {
    try {
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
