import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, price, seller, ratings, quantity, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product_info'>
                <h5 className='product_name'>{name}</h5>
                <p className='product_price'>Price: ${price}</p>
                <p className='product_menufac'>Manufacturer: {seller}</p>
                <p className='product_rating'>Rating: {ratings} star</p>
            </div>
                <button className='product_addToCart'>Add to Cart</button>
        </div>
    );
};

export default Product;