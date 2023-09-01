import styles from '@/shared/styles/styles.module.css'

export default function Loading(){
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className={ styles.spinner }></div>
            <p>Cargando SSR...</p>
        </div>
    )
}