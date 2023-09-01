import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col gap-4 items-center justify-center min-h-screen'>
            <h1>404</h1>
            <h2>Producto no encontrada</h2>
            <Link className='btn-primary max-w-max' href="/">Retorna al dashboard</Link>
        </div>
    )
}