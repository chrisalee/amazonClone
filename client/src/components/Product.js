import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({id, title, price, rating, image}) {

    const [{ basket }, dispatch] = useStateValue();
    // console.log('items in the basket -> ', basket);

    const addToBasket = () => {
        //dispatch item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                key: id,
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };

    return (
        <div className='product'>
            
            <div className='product__info'>
                {/* title */}
                <p>{title}</p>
                {/* price */}
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* star rating */}
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img
                src={image}
                alt=''
            />
            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product;
