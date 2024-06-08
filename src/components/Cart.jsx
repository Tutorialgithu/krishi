import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="cart">
            <Link className='flex items-center' to="/cart">
                <span className="cart-icon"><FaShoppingCart/></span>
                <span className="cart-count mt-[-15px]">{cartItems.length}</span>
            </Link>
        </div>
    );
};

export default Cart;
