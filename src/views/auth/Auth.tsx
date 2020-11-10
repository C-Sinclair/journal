import React, { ChangeEvent, useState } from 'react'
import { useCurrentUser } from '../../auth'
import { useRouter } from '../../routing'
import { supabase } from '../../supabase'

type InputChange = ChangeEvent<HTMLInputElement>

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

export const AuthView = () => {
  const { navigate, current } = useRouter()
  const [, setUser] = useCurrentUser()

  const [fields, setFields] = useState(initialState)

  const onChange = ({ target }: InputChange) => setFields(fields => ({
    ...fields,
    [target.name]: target.value
  }))

  const login = async (fields: LoginFields) => {
    try {
      const { user, error } = await supabase.auth.signIn(fields)
      if (error) throw error
      if (!user) throw new Error("No user found!")
      setUser(user)
    } catch (err) {
      console.error(err)
    } finally {
      navigate('Today')
    }
  }

  const register = async (fields: RegisterFields) => {
    try {
      const { error } = await supabase.auth.signUp(fields)
      if (error) throw error
    } catch (err) {
      console.error(err)
    } finally {
      navigate('Login')
    }
  }

  const onSubmit = () => {
    if (current === 'Login') {
      login(fields)
    } else {
      register(fields)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={fields.email}
        onChange={onChange}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={fields.password}
        onChange={onChange}
      />
      { current === 'Register' && (
        <>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={onChange}
          />
        </>
      )}
      <button type="submit" >
        {current === 'Login' ? 'Login' : 'Register'}
      </button>
      <button>
        {current === 'Login' ? 'Register' : 'Login'}
      </button>
    </form>
  )
}