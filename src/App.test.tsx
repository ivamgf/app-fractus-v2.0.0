import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './components/nav/header/header'
import Footer from './components/nav/footer/footer'

describe('App Fractus', () => {
  it('renders Header tag', () => {
    render(<Header />)
    const title = screen.getByText('Fractus')
    expect(title).toBeInTheDocument()
  })
})

