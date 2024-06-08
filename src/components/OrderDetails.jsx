import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const fetchOrder = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${orderId}`); // Fake API
                const data = await response.json();
                setOrder(data);
            } catch (error) {
                console.error('Failed to fetch order:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!order) {
        return <div>Order not found</div>;
    }

    return (
        <div className='container mx-auto p-4 bg-gray-100 text-teal-500 mt-10'>
            <h1 className='text-2xl font-bold mb-4'>Order #{order.id} Details</h1>
            <p><strong>Title:</strong> {order.title}</p>
            <p><strong>Details:</strong> {order.body}</p>
        </div>
    );
};

export default OrderDetail;
