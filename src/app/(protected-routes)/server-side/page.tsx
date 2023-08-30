import { IProduct, IProductsResponse, ProductsList } from "@/products";
import { Metadata } from "next";


const getAllProducts = async (): Promise<IProduct[]> => {
    //? GET SERVER SIDE PROPS 
    const { data }: IProductsResponse = await fetch('https://store.innovacode.online/api/products',{
        cache: 'no-store'
    })
        .then(res => res.json())

    return data;
}

export default async function ServerSidePage() {
    const products = await getAllProducts();
    
    return (
        <div>
            <h1>Server Side Rendering</h1>
            <ProductsList products={ products }/>
        </div>
    );
}


export const metadata: Metadata = {
    title: 'Server Side Rendering',
    description: 'Server side rendering in Next JS 13 with Innova Code'
}