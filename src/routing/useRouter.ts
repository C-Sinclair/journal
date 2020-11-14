import { useContext } from "react"
import { RouteContext } from "./context"
import type { Route } from "."
import { routeToUrl } from "./util"

export const useRouter = () => {
  const [page, setPage, pathname] = useContext(RouteContext)

  const navigate = (route: Route, date?: Date) => {
    window.history.replaceState({}, route, routeToUrl(route, date))
    setPage(route)
  }

  return {
    current: page,
    navigate,
    pathname,
  }
}