import { useContext } from "react"
import { RouteContext } from "./context"
import type { Route } from "."

export const useRouter = () => {
  const [page, setPage] = useContext(RouteContext)

  const navigate = (route: Route) => {
    // TODO push nav change state 
    // window.history.replaceState({}, routeToTitle, routeToUrl)
    setPage(route)
  }

  return {
    current: page,
    navigate
  }
}