import React from 'react';
import { render, screen } from '@testing-library/react';
import { ActiveView, CompletedView } from './Todo.stories'
import { Todo } from './Todo.hooks'

const checkboxId = "todo-checkbox"

describe('Active View', () => {

  it('should display todo body', () => {
    const { body } = ActiveView.args?.todo as Todo
    render(<ActiveView {...ActiveView.args} />)
    expect(screen.getByText(body)).toBeInTheDocument()
  })

  it('should be unchecked', () => {
    render(<ActiveView {...ActiveView.args} />)
    expect(screen.getByTestId(checkboxId)).not.toBeChecked()
  })
})

describe('Completed View', () => {

  it('should display todo body', () => {
    const { body } = CompletedView.args?.todo as Todo
    render(<CompletedView {...CompletedView.args} />)
    expect(screen.getByText(body)).toBeInTheDocument()
  })

  it('should be checked', () => {
    render(<ActiveView {...ActiveView.args} />)
    expect(screen.getByTestId(checkboxId)).toBeChecked()
  })
})