import React, { useEffect, useState } from 'react';
import { getProductsById, currency } from 'home/Products';

import { useParams } from 'react-router-dom';

export default function PDPContent() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            getProductsById(id).then(setProduct);
        } else {
            setProduct(null);
        }
    }, [id])

    if (!product) return null;
    return (
        <div className='grid grid-cols-2 gap-5'>
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <div className='flex'>
                    <div className='font-bold text-3xl flex-grow'>{product.name}</div>
                    <div className='font-bold text-3xl flex-end'>
                        {currency.format(product.price)}
                    </div>

                </div>
                <div className='mt-10'>{product.description}</div>
                <div className='mt-10'>{product.longDescription}</div>
            </div>
        </div>
    )
}
