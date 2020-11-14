import React, { ChangeEvent, FC, FormEvent } from 'react'
import { useRouter } from '../../routing'
import { Input, Form, Label, SubmitButton, SwitchViewButton, Title, Root } from './Auth.components'
import { useAuthFields } from './Auth.hooks'

type InputChange = ChangeEvent<HTMLInputElement>

export const AuthView: FC = () => {
  const { navigate, current } = useRouter()
  const { fields, login, register, setFields, fieldsValid } = useAuthFields()

  const onChange = ({ target }: InputChange) => setFields(fields => ({
    ...fields,
    [target.name]: target.value
  }))

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (current === 'Login') {
      login(fields)
    } else {
      register(fields)
    }
  }

  const switchViews = () => navigate(current === 'Login' ? 'Register' : 'Login')

  return (
    <Root>
    <Title>
      {current === 'Login' 
      ? "Go ahead and log yourself back in..."
      : "Register yourself for an account..."   
      }
    </Title>
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