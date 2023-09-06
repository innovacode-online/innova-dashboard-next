'use client'

import styles from '@/shared/styles/styles.module.css'
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';


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

    return (
        <div className='product__list'>
            {
                products?.map( product => (
                    <ProductCard product={ product }/>
                ))
            }
        </div>
    )
}
