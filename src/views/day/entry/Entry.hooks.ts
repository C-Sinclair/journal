import { useContext } from "react"
import { supabase } from "../../../supabase"
import { useDay } from '../Day.hooks'
import { EntryContext } from "./Entry.context"

export interface Entry {
  id: string
  timestamp: Date
  body: string
  location?: string
  day_id: string
}

export const useEntries = () => {
  const { day } = useDay()
  const [entries, setEntries] = useContext(EntryContext)

  const fetchEntries = async () => {
    try {
      if (!day) {
        throw new Error("No current day selected")
      }
      const { data, error } = await supabase
        .from<Entry>('Entries')
        .select('id, timestamp, body, location')
        .eq('day_id', day.id)
      if (error) {
        throw error
      }
      setEntries(data || [])
    } catch(err) {
      console.error(err)
    }
  }

  return {
    entries,
    fetchEntries
  }
}