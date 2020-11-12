import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LoginView, RegisterView } from './Auth.stories'

const submitButton = "submit-button"
const switchButton = "switch-view-button"

describe('Login View', () => {

  it('should not allow submit without both email and password', () => {
    render(<LoginView {...LoginView.args} />)
    expect(screen.getByTestId(submitButton)).toBeDisabled()
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "email@123.com" } })
    expect(screen.getByTestId(submitButton)).toBeDisabled()
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "Password/1" } })
    expect(screen.getByTestId(submitButton)).not.toBeDisabled()
  })

  it('should switch to register view on register button click', async () => {
    render(<LoginView {...LoginView.args} />)
    fireEvent.click(screen.getByTestId(switchButton))
    await waitFor(() =>
      expect(screen.getByTestId(submitButton).textContent).toEqual("Register")
    )
  })
})

describe('Register View', () => {

  it('should not allow submit without email, password and password confirmation', () => {
    render(<RegisterView {...RegisterView.args} />)
    expect(screen.getByTestId("submit-button")).toBeDisabled()
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "email@123.com" } })
    expect(screen.getByTestId("submit-button")).toBeDisabled()
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "Password/1" } })
    expect(screen.getByTestId("submit-button")).toBeDisabled()
    fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "Password/1" } })
    expect(screen.getByTestId("submit-button")).not.toBeDisabled()
  })

  it('should switch to login view on login button click', () => {
    render(<RegisterView {...RegisterView.args} />)
    fireEvent.click(screen.getByTestId(switchButton))
    expect(screen.getByTestId(submitButton).textContent).toEqual("Login")
  })
})