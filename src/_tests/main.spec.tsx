import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MainIntro from '../../__mocks__/MainMock'

describe('App Fractus - Main', () => {

    it('should return text', () => {
        render(<MainIntro />)
        const p = screen.getByText('Aprendendo Frações com Fractus!')
        expect(p).toBeInTheDocument()
    })
    it('should return alt text image', () => {
      render(<MainIntro />)
      const img = screen.getByAltText('logo')
      expect(img).toBeInTheDocument()
  })
})
