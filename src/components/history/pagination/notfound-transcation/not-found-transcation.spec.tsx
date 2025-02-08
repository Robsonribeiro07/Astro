import { render,screen} from '@testing-library/react'

import "@testing-library/jest-dom"
import { NotFoundTransctions } from './not-found-transctions'

const mockeUseFilter = jest.fn()

jest.mock("@/store/use-filter", () => ({
    useFiterInput: () => mockeUseFilter()
}))

describe("NotFoundTranscations", () => {
    it("deve exibir 'Nenhuma transação encontrada' quando houver um filtro ativo", () => {
        mockeUseFilter.mockReturnValue({ filter: "Algum Valor"})


        
    render(<NotFoundTransctions/>)

    expect(screen.getByText('Nenhuma transação encontrada')).toBeInTheDocument()
    })


    it("deve exibir que tal adiciona uma nova trasaçao caso nao houve um filtro", () => {
        mockeUseFilter.mockReturnValue({filter: undefined})



        render(
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <NotFoundTransctions />
                </tbody>
            </table>
        )


        expect(screen.getByText('Nenhuma transaçao que tal adiciona uma para começar')).toBeInTheDocument()
    })

})