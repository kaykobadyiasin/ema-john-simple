import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard} from '@fortawesome/free-solid-svg-icons'
import './Orders.css';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product = {product}
                    handleRemoveFromCart = {handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleClearCart = {handleClearCart}
                >
                <Link to="/checkout">
                    <button className='btn-proceed'>Proceed CheckOut
                    <FontAwesomeIcon icon={faCreditCard} />
                    </button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;