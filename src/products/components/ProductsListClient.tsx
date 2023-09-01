'use client'

import styles from '@/shared/styles/styles.module.css'
import { useProducts } from '../hooks/useProducts';
import Image from 'next/image';
import Link from 'next/link';

export const ProductsListClient = () => {

    const { isLoading, products } = useProducts();
    

    if( isLoading ){
        return (
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className={ styles.spinner }></div>
                <p>Cargando CSR...</p>
            </div>
        )
    }

    const baseUrl = 'https://store.innovacode.online'

    return (
        <div className='product__list'>
            {
                products?.map( product => (
                    <div className='product__card'>
                        <Image
                            src={ baseUrl + product.images[0].url }
                            alt={ product.name }
                            width={ 858 }
                            height={ 858 }
                        />
            
                        <h3 className='mt-3'>{ product.name }</h3>
                        <p className='text-slate-500 line-clamp-2'>{ product.description }</p>
                        <Link
                            className='btn-primary'
                            href={`/server-side/product/${ product.slug }`}
                        >
                            Ver Producto
                        </Link>
                    </div>  
                ))
            }
        </div>
    )
}
