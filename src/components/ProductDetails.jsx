import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { setSingleProduct } from '../redux/productSlice';
import StarRating from './StarRating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const product = useSelector((state) => state.product.singleProduct);
    const dispatch = useDispatch();
    const [stock, setStock] = useState(true);

    useEffect(() => {
        console.log(productId, "productId");
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://bhartiyabiotech.ap-south-1.elasticbeanstalk.com/productf/${productId}`);
                dispatch(setSingleProduct(response.data));
                console.log(response.data);
            } catch (err) {
                setError('Error fetching the product');
                console.error('Error fetching the product:', err);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        } else {
            setError('Invalid product ID');
            setLoading(false);
        }
    }, [productId, dispatch]);

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity }));
        console.log('Product added to cart:', product);
        toast.success('Product added to cart', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="flex items-center justify-center space-x-2 animate-bounce">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="text-center mt-4 text-gray-600 text-lg font-semibold">
                    Loading...
                </div>
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-white md:flex items-center justify-around min-h-screen w-full px-4">
            <div className="w-[400px] h-[400px] object-cover overflow-hidden mx-auto">
                <img src={product.imageUrl} alt={product.title} className="h-full w-full object-cover" />
            </div>
            <div className="px-20 text-center flex-1 items-center">
                <h3 className="text-lg font-semibold text-gray-600">{product.productName}</h3>
                <h4 className="text-xl text-gray-600 font-bold mt-2">${product.varients[0].price}</h4>
                {/* <div className="flex justify-center mt-3">
                    <StarRating rating={product.rating.rate} />
                </div> */}
                <h4 className="text-xl text-gray-600 font-bold mt-2">{product.category}</h4>
                <p className="text-gray-600 font-semibold mt-3">{product.description}</p>
                <div className="flex items-center justify-center mt-4">
                    <button 
                        onClick={handleDecrement} 
                        className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button 
                        onClick={handleIncrement} 
                        className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                        +
                    </button>
                </div>
                <button 
                    onClick={handleAddToCart} 
                    type="button" 
                    className="bg-gray-600 font-semibold hover:bg-gray-700 text-white text-sm px-2 py-2.5 w-full mt-6"
                >
                    Add to Cart
                </button>
                <p className="text-gray-600 font-semibold mt-3">Stock: {stock ? 'Available' : 'Out of Stock'}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetails;
