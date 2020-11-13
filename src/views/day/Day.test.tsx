import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PreviousDayView, TodayView } from './Day.stories'
import { DATE_DAY } from './Day.test.values';

describe('Day View', () => {

  it('should display today', () => {
    render(<TodayView {...TodayView.args} />)
    expect(screen.getByText(/today/ig)).toBeInTheDocument()
  })

})

describe('Previous Day View', () => {

  it('should display date of previous day', () => {
    render(<PreviousDayView {...PreviousDayView.args} />)
    const regex = new RegExp(DATE_DAY, 'ig')
    expect(screen.getByText(regex)).toBeInTheDocument()
  })
})