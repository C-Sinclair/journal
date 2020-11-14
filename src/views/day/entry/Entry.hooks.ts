import { useEffect, useState } from "react"
import { supabase } from "../../../supabase"
import { Day } from '../Day.hooks'

export interface Entry {
  id: string
  timestamp: Date
  body: string
  location?: string
  day_id: string
}

export const useEntries = () => {
  const [day, setDay] = useState<Day>()
  const [entries, setEntries] = useState<Entry[]>([])

  const fetchEntriesForDay = async (day: Day) => {
    try {
      setDay(day)
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

  useEffect(() => {
    const sub = supabase
      .from('Todos')
      .on('*', () => {
        if (day) {
          fetchEntriesForDay(day)
        }
      })
      .subscribe()
    return () => {
      sub.unsubscribe()
    }
  // eslint-disable-next-line
  }, [])

  return {
    entries,
    fetchEntriesForDay
  }
}