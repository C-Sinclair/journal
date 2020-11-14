import moment from 'moment'
import { useCallback, useContext, useEffect } from "react"
import { useCurrentUser } from '../../auth'
import { dateFromRoute, useRouter } from "../../routing"
import { supabase } from "../../supabase"
import { DayContext } from './Day.context'

export interface Day {
  id: string
  date: Date
  title: string
}

const isDateToday = (date: Date) => moment(date).diff(moment(), 'days') === 0

const dbDate = (date: Date) => moment(date).format("YYYY-M-D")

export const useDay = () => {
  const { current, pathname } = useRouter()
  const [user] = useCurrentUser()
  const [day, setDay] = useContext(DayContext)
  
  const create = useCallback(async (date: Date) => {
    try {
      if (!user) {
        throw new Error("User must be logged in")
      }
      const isToday = isDateToday(date)
      const { data, error } = await supabase
        .from('Days')
        .insert({
          title: moment(date).format('dddd'),
          user_id: user?.id
        })
        .single()
      if (error) {
        throw error
      }
      if (!data) {
        throw new Error("Day record could not be created")
      }
      console.log("Created", data)
      setDay(!isToday ? data : { ...data, title: "Today" })
    } catch(err) {
      console.error(err)
    }
  }, [user, setDay])

  const fetch = useCallback(async (date: Date) => {
    try {
      const isToday = isDateToday(date)
      const { data, error } = await supabase
        .from<Day>('Days')
        .select('id, title, date')
        .eq("date", dbDate(date))
      if (error) {
        throw error
      }
      if (!data || data.length === 0) {
        console.log("No day record found, creating one")
        await create(date)
      } else {
        setDay(!isToday ? data[0] : { ...data[0], title: "Today" })
      }
    } catch(err) {
      console.error(err)
    }
  }, [create, setDay])

  useEffect(() => {
    const date = dateFromRoute(current, pathname)
    fetch(date)
  }, [current, fetch, pathname])

  return {
    day,
    setDay,
  }
}