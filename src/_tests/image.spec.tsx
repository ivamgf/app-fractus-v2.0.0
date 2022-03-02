import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageMock from '../../__mocks__/ImageMock'

describe('App Fractus - Image', () => {

    it('should return alt text image', () => {
        render(<ImageMock />)
        const textAlt = screen.getByAltText('Pizza na mesa com toalha')
        expect(textAlt).toBeInTheDocument()
    })
})
