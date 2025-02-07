
export function ConvertNumberEmReal(value: number | undefined) {

       if(!value) return "R$ 0,00"

        const newValue = value / 100
        return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
        } ).format((newValue))
}