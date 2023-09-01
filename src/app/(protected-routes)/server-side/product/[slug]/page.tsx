import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { IProduct, IProductsResponse } from "@/products";


interface Props {
    params: { slug: string }
}


const getSimpleProductData = async (slug: string): Promise<IProduct> => {
    try {
        const { data: product }: { data: IProduct } = await fetch(`https://store.innovacode.online/api/products/${ slug }`,{
            next: {
                revalidate: 86400
            }
        }).then(res => res.json());

        return product
    } catch (error) {
        notFound();
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    try {   
        const { data: product }: { data: IProduct } = await fetch(`https://store.innovacode.online/api/products/${ params.slug }`)
            .then(res => res.json());

        return {
            title: product.name + ' - Products',
            description: product.description
        }
    } catch (error) {
        return {
            title: 'Producto',
            description: ''
        }
    }
}

export async function generateStaticParams(){
    
    const { data }: IProductsResponse = await fetch('https://store.innovacode.online/api/products')
        .then( res => res.json());

    return data.map( product => ({
        slug: product.slug 
    }))
}   


export default async function ProductPage({ params }: Props) {

    const { slug } = params;
    const product = await getSimpleProductData( slug );
    const baseUrl = 'https://store.innovacode.online'

    return (
        <>
            <h2 className="text-3xl mb-4">Detalles del producto</h2>
            <div className="product__container">
                <div>
                    <h1>{ product.name }</h1>
                    <p className="mb-5">{ product.category.name }</p>
                    
                    <h2 className="mb-1">Descripcion:</h2>
                    <p className="text-slate-500 text-justify mb-5">{ product.description }</p>
                    
                    <h2 className="mb-1">Price:</h2>
                    <p className="text-slate-500 text-justify mb-5">{ product.price }$</p>

                    <button className="btn-primary hover:shadow-md">Agregar al carrito</button>

                </div>
                <Image
                    className="max-w-xl"
                    alt={ product.name }
                    width={858}
                    height={858}
                    src={ baseUrl + product.images[0].url }
                />
            </div>
        </>
    );
}
