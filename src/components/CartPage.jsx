import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';



const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
        toast.success('Item removed from cart');
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4 bg-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className="text-center text-gray-600">Your cart is empty</div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lf flex-1 overflow-y-auto h-screen bg-white p-5">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col mb-4">
                                <div className="w-full h-48 overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                                    <p className="text-gray-600 mt-2">${item.price}</p>
                                    <div className="flex items-center mt-4">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-l-lg"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-2 border-t border-b border-gray-200">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-r-lg"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="px-4 pb-4">
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        type="button"
                                        className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rt bg-white shadow-lg rounded-lg p-6 text-center lg:sticky lg:top-4 lg:self-start">
                        <h3 className="text-xl font-semibold text-gray-700">Order Summary</h3>
                        <p className="text-gray-600">Subtotal: <span className="font-semibold">₹{getTotalPrice()}</span></p>
                        <p className="text-gray-600">Shipping: <span className="font-semibold">Free</span></p>
                        <p className="text-gray-600">Taxes: <span className="font-semibold">₹0.00</span></p>
                        <p className="text-gray-600">You will save: <span className="font-semibold">₹0.00</span></p>
                        <h3 className="text-2xl font-semibold text-gray-700">Total: ₹{getTotalPrice()}</h3>
                        <p className="text-gray-600 mt-2">Shipping and taxes calculated at checkout.</p>
                        <button
                            type="button"
                            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 mt-4"
                        >
                            <Link to="/checkout">Proceed to Checkout</Link>
                        </button>
                        <Link to="/productlist" className="  text-green-500 font-semibold text-xl text-center rounded-lg hover:text-green-600 mt-4 inline-block p-2">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
