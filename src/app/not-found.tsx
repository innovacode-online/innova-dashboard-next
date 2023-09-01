import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Pagina no encontrada</h2>
            <Link className='btn-primary' href="/">Retorna al dashboard</Link>
        </div>
    )
}