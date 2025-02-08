import { Transactions } from '@/api/use-get-transcations'
import { render, screen } from '@testing-library/react'
import { HistoryContent } from './history-content'
import "@testing-library/jest-dom"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'


const mockUSerDataTransactions = jest.fn()
jest.mock('@/hooks/use-get-transactions', () => ({
    useGetDataTransaction: () => mockUSerDataTransactions()
}))

describe('History-content', () => {
    it('Deve aparece que tal adiciona uma nova transiçao', () => {

        const mockTranscation: Transactions[] = [
            {
                Amount: 100,
                Category: 'Alimentação',
                Description: 'Compra no supermercado',
                transactionId: '1',
                _id: 'dasda',
                TypeTransactions: 'Income',
                CreateAt: '2025-01-01'
                

            }
        ]
        mockUSerDataTransactions.mockReturnValue({
            transctions: mockTranscation
        })

        
        render(<HistoryContent/>)

        const transctionsDescription = screen.getByText('Compra no supermercado')

        const Amout = screen.getByText('R$ 1,00')
        const TypeTransactions = screen.getByText('Income')

        const formatadeData = formatDistanceToNow('2025-01-01', {
            locale: ptBR,
            addSuffix: true
        })


        expect(Amout).toBeInTheDocument()
        expect(TypeTransactions).toBeInTheDocument()
        expect(transctionsDescription).toBeInTheDocument()
        expect(screen.getByText(formatadeData)).toBeInTheDocument()
    })

    it('Deve Renderiza o skeleton de carregamento', () => {

        mockUSerDataTransactions.mockReturnValue({
            transctions: null
        })

        render(<HistoryContent/>)


        expect(screen.getByTestId('skeleton-card')).toBeInTheDocument()
    })

    it('Deve Renderiza o skeleton de carregamento', () => {

        mockUSerDataTransactions.mockReturnValue({
            transctions: []
        })

        render(<HistoryContent/>)


        expect(screen.getByText('Nenhuma transaçao que tal adiciona uma para começar')).toBeInTheDocument()
    })
})