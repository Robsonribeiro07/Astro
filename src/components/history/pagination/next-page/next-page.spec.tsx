import {screen, render} from '@testing-library/react'
import "@testing-library/jest-dom"
import { NextPage } from './next-page'



const mockUsePagination = jest.fn()

jest.mock('@/store/state-current-page', () => ({
    usePaginationState: () => mockUsePagination()
}))

describe('NavigationButtons', () => {
    it('deve fica na cor escura caso chegue no fijnal da pagina', () => {
        mockUsePagination.mockReturnValue({isEndPage: true})

        render(<NextPage/>)

        const paginationNext = screen.getByTestId('next-page')

        expect(paginationNext).toHaveClass('text-[gray]')
    })
})