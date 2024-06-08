import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';
import { addAddress } from '../redux/addressSlice';
import { setOrderDetails } from '../redux/orderSlice';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const existingAddresses = useSelector((state) => state.address.addresses);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        phone: '',
        email: '',
    });
    const [selectedAddress, setSelectedAddress] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({
            ...shippingInfo,
            [name]: value,
        });
    };

    const handleAddressSelect = (e) => {
        const addressId = e.target.value;
        setSelectedAddress(addressId);
        const address = existingAddresses.find(addr => addr.id === addressId);
        if (address) {
            setShippingInfo({ ...address });
        }
        else {
            setShippingInfo({
                name: '',
                address: '',
                city: '',
                state: '',
                postalCode: '',
                country: '',
                phone: '',
                email: '',
            });
        }
    };

    const handleSaveAddress = () => {
        const newAddress = { ...shippingInfo, id: new Date().getTime().toString() };
        dispatch(addAddress(newAddress));
        setSelectedAddress(newAddress.id);
        toast.success('Address saved successfully!');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderDetails = {
            cartItems,
            shippingInfo,
            total: getTotalPrice(),
        };
        console.log('Order placed:', orderDetails);
        dispatch(setOrderDetails(orderDetails));
        dispatch(clearCart());
        toast.success('Order placed successfully!');
        navigate('/order-confirmation');
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Add Shipping Information</h3>
                    <form onSubmit={(e) => e.preventDefault()} className="bg-white shadow-lg rounded-lg p-6 mb-4">
                        {/* Shipping Info Form */}
                        {['name', 'address', 'city', 'state', 'postalCode', 'country', 'phone', 'email'].map(field => (
                            <div className="mb-4" key={field}>
                                <label className="block text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                <input
                                    type="text"
                                    name={field}
                                    value={shippingInfo[field]}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleSaveAddress}
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
                        >
                            Save Address
                        </button>
                    </form>
                    {existingAddresses.length > 0 && (
                        <div className="mb-4">
                            <label className="block text-gray-700">Use Existing Address</label>
                            <select
                                onChange={handleAddressSelect}
                                className="w-full p-2 border rounded bg-white"
                                value={selectedAddress}
                            >
                                <option value="">Select an address</option>
                                {existingAddresses.map((address) => (
                                    <option key={address.id} value={address.id}>
                                        {address.name} - {address.address}, {address.city}, {address.state}, {address.postalCode}, {address.country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h3>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-700">Items:</h4>
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
                            <span>${getTotalPrice()}</span>
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 mt-4"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
