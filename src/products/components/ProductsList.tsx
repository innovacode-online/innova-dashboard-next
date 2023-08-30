import { IProduct, ProductCard } from '..'

interface Props {
    products: IProduct[]
}

export const ProductsList = ({ products }: Props) => {
    return (
        <div className='product__list'>
            {
                products.map( product => (
                    <ProductCard product={ product }/>
                ))
            }
        </div>
    )
}
