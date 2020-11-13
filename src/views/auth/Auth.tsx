import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useCurrentUser } from '../../auth'
import { useRouter } from '../../routing'
import { supabase } from '../../supabase'
import { Input, Form, Label, SubmitButton, SwitchViewButton, Title, Root } from './Auth.components'

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

export const AuthView: FC = () => {
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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (current === 'Login') {
      login(fields)
    } else {
      register(fields)
    }
  }

  const switchViews = () => navigate(current === 'Login' ? 'Register' : 'Login')

  useEffect(() => {
    setFieldsValid(
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      (current === 'Login' ? true : fields.password === fields.confirmPassword)
    )
  }, [fields, current])

  return (
    <Root>
    <Title>Go ahead and log yourself back in...</Title>
    <Form onSubmit={onSubmit}>
      <Label htmlFor="email-input">Email</Label>
      <Input
        type="text"
        name="email"
        id="email-input"
        value={fields.email}
        onChange={onChange}
      />
      <Label htmlFor="password-input">Password</Label>
      <Input
        type="password"
        name="password"
        id="password-input"
        value={fields.password}
        onChange={onChange}
      />
      { current === 'Register' && (
        <>
          <Label htmlFor="confirm-password-input">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirm-password-input"
            value={fields.confirmPassword}
            onChange={onChange}
          />
        </>
      )}
      <SubmitButton
        type="submit"
        disabled={!fieldsValid}
        data-testid="submit-button"
      >
        {current === 'Login' ? 'Login' : 'Register'}
      </SubmitButton>
      <SwitchViewButton
        type="button"
        data-testid="switch-view-button"
        onClick={switchViews}
      >
        {current === 'Login' ? 'Register' : 'Login'}
      </SwitchViewButton>
    </Form>
    </Root>
  )
}