import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{ basket }, dispatch] = useStateValue();
    // console.log('items in the basket -> ', basket);
    const removeFromBasket = () => {
        //remove item from the data layer, (the basket)
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            // key: id,
            id: id,
        })
    };

    return (
        <div className='checkoutProduct'>
            <img
                className='checkoutProduct__image'
                src={image}
                alt={title}
            />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct;
