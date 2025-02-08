export function Footer() {

    const getYear = new Date().getFullYear()
    return (
        <div className="w-fit mx-auto text-sm ">&copy; {getYear} Astro. Feito por Robson Ribeiro  </div>
    )
}