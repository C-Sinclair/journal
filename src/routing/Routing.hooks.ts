import { useContext } from "react"
import { RouteContext } from "./Routing.context"

export const useRouter = () => {
  const { page, path, navigate } = useContext(RouteContext)

  return {
    current: page,
    navigate,
    path,
  }
}