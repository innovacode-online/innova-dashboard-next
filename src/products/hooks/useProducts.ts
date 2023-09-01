import { useState, useEffect } from 'react';

import axios from 'axios';
import { IProduct, IProductsResponse } from '..';


export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    const getAllProducts = async () => {
        try {
            setIsLoading(true);
            const { data: { data } } = await axios.get<IProductsResponse>('https://store.innovacode.online/api/products');
            setProducts( data );
            setIsLoading(false);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllProducts();      
    },[])

    return {
        products,
        isLoading
    }
}