import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Dash/Sidebar';
import axios from 'axios';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toastify

const AddProduct = () => {
  const [token, setToken] = useState('');
  const [formData, setFormData] = useState({
    productId: '',
    imageUrl: '',
    productName: '',
    category: '',
    description: '',
    varients: []
  });
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const dt = localStorage.getItem('DKAUTH');

    if (dt) {
      const parsedDt = JSON.parse(dt);
      setToken(parsedDt.token);
    } else {
      console.log("No data found in localStorage for 'DKAUTH'");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('varients')) {
      const [field, index, key] = name.split('.');
      const updatedVariants = [...formData.varients];
      updatedVariants[index] = { ...updatedVariants[index], [key]: value };
      setFormData({ ...formData, varients: updatedVariants });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddVariant = () => {
    setFormData({
      ...formData,
      varients: [...formData.varients, { size: '', price: '', discount: '' }]
    });
  };

  const handleRemoveVariant = (index) => {
    const updatedVariants = formData.varients.filter((_, i) => i !== index);
    setFormData({ ...formData, varients: updatedVariants });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check to ensure at least one variant is present
    if (formData.varients.length === 0) {
      toast.error('Please add at least one variant.');
      return;
    }

    try {
      const formDataToSend = new FormData();
      const productData = {
        productId: formData.productId,
        productName: formData.productName,
        category: formData.category,
        description: formData.description,
        varients: formData.varients
      };

      formDataToSend.append('product', JSON.stringify(productData));
      formDataToSend.append('image', imageFile);
   
      const response = await axios.post(
        'http://bhartiyabiotech.ap-south-1.elasticbeanstalk.com/product',
        formDataToSend,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      alert('Product added successfully!');
      navigate('/ProductDashboard');
    } catch (error) {
      console.error(error);
    }

    setFormData({
      productId: '',
      imageUrl: '',
      productName: '',
      category: '',
      description: '',
      varients: []
    });
    setImageFile(null);
  };

  return (
    <div className="flex">
      <Sidebar className="w-1/5 h-full" />
      <div className="container mx-auto my-4 px-4 py-8 sm:w-4/5 bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex items-center justify-around mb-4">
          <h2 className="text-2xl font-bold py-1 px-2 w-1/2 border-2 border-black rounded-tl-lg rounded-tr-lg flex justify-center text-center text-black bg-gray-200">
            Add New Product
          </h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>

        <form onSubmit={handleSubmit} className='w-3/4 mx-auto'>
          {/* Product ID */}
          <div className="mb-4">
            <label htmlFor="productId" className="block text-sm font-medium text-gray-600">Product ID</label>
            <input
              type="text"
              id="productId"
              name="productId"
              required
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
              value={formData.productId}
            />
          </div>

          {/* Product Image */}
          <div className="my-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-600">Upload Product Image</label>
            <input
              type="file"
              id="imageUrl"
              name="imageUrl"
              required
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleFileChange}
            />
          </div>

          {/* Product Name */}
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-600">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              required
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
              value={formData.productName}
            />
          </div>

          {/* Product Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              required
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
              value={formData.category}
            />
          </div>

          {/* Product Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              id="description"
              name="description"
              required
              className="form-textarea mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
              value={formData.description}
            />
          </div>

          {/* Product Variants */}
          {formData.varients.map((variant, index) => (
            <div key={index} className="mb-4">
              <h4 className="block text-sm font-medium text-gray-600">Variant {index + 1}</h4>
              <div className="mb-4">
                <label htmlFor={`varients.${index}.size`} className="block text-sm font-medium text-gray-600">Size</label>
                <input
                  type="text"
                  id={`varients.${index}.size`}
                  name={`varients.${index}.size`}
                  required
                  className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
                  value={variant.size}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`varients.${index}.price`} className="block text-sm font-medium text-gray-600">Price</label>
                <input
                  type="number"
                  id={`varients.${index}.price`}
                  name={`varients.${index}.price`}
                  required
                  className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
                  value={variant.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`varients.${index}.discount`} className="block text-sm font-medium text-gray-600">Discount</label>
                <input
                  type="number"
                  id={`varients.${index}.discount`}
                  name={`varients.${index}.discount`}
                  required
                  className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
                  value={variant.discount}
                  onChange={handleInputChange}
                />
              </div>
              <button type="button" className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleRemoveVariant(index)}>Remove Variant</button>
            </div>
          ))}
          <button type="button" className="bg-green-500 text-white px-2 py-1 rounded mb-4" onClick={handleAddVariant}>Add Variant</button>

          {/* Submit and Cancel buttons */}
          <div className="mb-4 mt-4 flex gap-4 justify-center">
            <button
              type="submit"
              className="bg-green-500 w-48 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 w-48 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-300"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
