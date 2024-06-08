import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const OrderConfirmationPage = () => {
    const orderDetails = useSelector((state) => state.order.orderDetails);

    if (!orderDetails) {
        return <div className="container mx-auto p-4 text-center text-gray-700">No order details found.</div>;
    }

    const { cartItems, shippingInfo, total } = orderDetails;
    return (
        <div className="container mx-auto p-4">
            <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Order Confirmation</h2>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Thank you for your purchase!</h3>
                <p className="text-gray-700 mb-4">Your order has been placed successfully.</p>
                <p className="text-gray-700 mb-4">You will receive an email confirmation shortly.</p>
                <Link to="/productlist" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
                    Continue Shopping
                </Link>
            </div>
        </div>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Shipping Information</h3>
                <div className="text-gray-700">
                    <p><strong>Name:</strong> {shippingInfo.name}</p>
                    <p><strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.postalCode}, {shippingInfo.country}</p>
                    <p><strong>Phone:</strong> {shippingInfo.phone}</p>
                    <p><strong>Email:</strong> {shippingInfo.email}</p>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h3>
                <div className="mb-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between py-2 border-b">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4"/>
                                <span>{item.title} x {item.quantity}</span>
                            </div>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-700">
                    <span>Total:</span>
                    <span>${total}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
