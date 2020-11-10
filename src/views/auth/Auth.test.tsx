import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LoginView, RegisterView } from './Auth.stories'

describe('Login View', () => {

  it('should not allow submit without both email and password', () => {
    render(<LoginView {...LoginView.args} />)
    expect(screen.getByTestId("submit-button")).toBeDisabled()
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "email@123.com" } })
    expect(screen.getByTestId("submit-button")).toBeDisabled()
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "Password/1" } })
    expect(screen.getByTestId("submit-button")).not.toBeDisabled()
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
})