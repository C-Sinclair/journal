import { useEffect, useState } from "react"
import { useCurrentUser } from '../../auth'
import { useRouter } from '../../routing/Routing.hooks'
import { supabase } from '../../supabase'

interface LoginFields {
  email: string
  password: string
}
interface RegisterFields extends LoginFields {
  confirmPassword: string
}

const initialState: LoginFields | RegisterFields = {
  email: "",
  password: "",
  confirmPassword: ""
}

export const useAuthFields = () => {
  const { navigate, current } = useRouter()
  const [, setUser] = useCurrentUser()

  const [fields, setFields] = useState(initialState)
  const [fieldsValid, setFieldsValid] = useState(false)

  const login = async (fields: LoginFields) => {
    try {
      const { user, error } = await supabase.auth.signIn(fields)
      if (error) throw error
      if (!user) throw new Error("No user found!")
      setUser(user)
      navigate({ name: 'Today', date: new Date() })
    } catch (err) {
      console.error(err)
    }
  }

  const register = async (fields: RegisterFields) => {
    try {
      const { error } = await supabase.auth.signUp(fields)
      if (error) throw error
      navigate({ name: 'Login' })
    } catch (err) {
      console.error(err)
    }
  } 

  useEffect(() => {
    setFieldsValid(
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      (current.name === 'Login' ? true : fields.password === fields.confirmPassword)
    )
  }, [fields, current])

  return {
    login,
    register,
    fields,
    setFields,
    fieldsValid,
  }
}