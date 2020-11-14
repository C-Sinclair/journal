import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { TodoView } from './Todo';
import { Todo } from './Todo.hooks';

interface ViewProps {
  todo?: Todo
}

const fakeTodo: Todo = {
  id: "123",
  body: "A great todo",
  day_id: "456"
}

const View: Story<ViewProps> = (args) => (
  <TodoView todo={args.todo as Todo} />
)

export const ActiveView = View.bind({})
ActiveView.args = {
  todo: fakeTodo
}

export const CompletedView = View.bind({})
CompletedView.args = {
  todo: { 
    ...fakeTodo, 
    completed: new Date()
  }
}

export default {
  title: 'Todo',
  component: TodoView
} as Meta