import { useContext } from "react"
import { supabase } from "../../../supabase"
import { useDayState } from "../Day.hooks"
import { TodoContext } from "./Todo.context"

export interface Todo {
  id: string
  day_id: string
  completed?: Date
  body: string
}

export const useTodos = () => {
  const [todos, setTodos] = useContext(TodoContext)
  const day  = useDayState()

  const fetchTodos = async () => {
    try {
      if (!day) {
        throw new Error("No current day")
      }
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

  return {
    todos,
    fetchTodos
  }
}
