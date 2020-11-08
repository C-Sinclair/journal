import { User } from '@supabase/gotrue-js/dist/main/lib/types'
import React, { FC, useMemo, useState } from 'react'
import { AuthContext, IAuthContext } from './auth'
import { RouteContext, IRouteContext, pathToRoute } from './routing'

export const Providers: FC<{}> = ({ children }) => {
  const auth = useState<User | null>(null)

  const path = window.location.pathname.slice(1).toLowerCase()
  const [page, setPage] = useState(pathToRoute(path))
  const route = useMemo<IRouteContext>(() => ([page, setPage]), [page, setPage])

  return (
    <AuthContext.Provider value={auth as IAuthContext}>
      <RouteContext.Provider value={route}>
        {children}
      </RouteContext.Provider>
    </AuthContext.Provider>
  )
}