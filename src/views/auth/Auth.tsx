import React, { ChangeEvent, useEffect, useState } from 'react'
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
  const [fieldsValid, setFieldsValid] = useState(false)

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
      navigate('Today')
    } catch (err) {
      console.error(err)
    }
  }

  const register = async (fields: RegisterFields) => {
    try {
      const { error } = await supabase.auth.signUp(fields)
      if (error) throw error
      navigate('Login')
    } catch (err) {
      console.error(err)
    }
  }

  const onSubmit = () => {
    if (current === 'Login') {
      login(fields)
    } else {
      register(fields)
    }
  }

  const switchViews = () => navigate(current === 'Login' ? 'Register' : 'Login')

  useEffect(() => {
    const emailValid = fields.email.length > 0
    const passwordValid = fields.password.length > 0
    const confirmPasswordValid = current === 'Login' ? true : fields.password == fields.confirmPassword
    const valid = emailValid && passwordValid && confirmPasswordValid
    console.log(`confm ${valid}`, fields)
    setFieldsValid(valid)
  }, [fields, current])

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email-input">Email</label>
      <input
        type="text"
        name="email"
        id="email-input"
        value={fields.email}
        onChange={onChange}
      />
      <label htmlFor="password-input">Password</label>
      <input
        type="password"
        name="password"
        id="password-input"
        value={fields.password}
        onChange={onChange}
      />
      { current === 'Register' && (
        <>
          <label htmlFor="confirm-password-input">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password-input"
            value={fields.confirmPassword}
            onChange={onChange}
          />
        </>
      )}
      <button
        type="submit"
        disabled={!fieldsValid}
        data-testid="submit-button"
      >
        {current === 'Login' ? 'Login' : 'Register'}
      </button>
      <button
        type="button"
        data-testid="switch-view-button"
        onClick={switchViews}
      >
        {current === 'Login' ? 'Register' : 'Login'}
      </button>
    </form>
  )
}