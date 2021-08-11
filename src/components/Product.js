import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'

function Product({ id, title, price, image, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        })


    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

            
                </div>

            </div>
            <img src={image} alt='prop'/>
            <button onClick={addToBasket}>Add to basket</button>

            
            
        </div>
    )
}

export default Product
