import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, price, seller, ratings, quantity, img} = props.product;

    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product_info'>
                <h5 className='product_name'>{name}</h5>
                <p className='product_price'>Price: ${price}</p>
                <p className='product_menufac'>Manufacturer: {seller}</p>
                <p className='product_rating'>Rating: {ratings} star</p>
            </div>
                <button onClick={() => handleAddToCart(props.product)} className='product_addToCart'>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
        </div>
    );
};

export default Product;