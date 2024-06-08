import React, { useState } from 'react';
import Sidebar from '../Dash/Sidebar';

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    brand: '',
    price: '',
    variant: '',
    category: '',
    rating: '',
    stock: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic here
    console.log(formData);
    // Reset the form
    setFormData({
      image: '',
      name: '',
      brand: '',
      price: '',
      variant: '',
      category: '',
      rating: '',
      stock: '',
      description: ''
    });
    // Show prompt
    alert('Product updated successfully!');
  };

  return (
    <div className="flex">
      <Sidebar className="w-1/5 h-full" />
      <div className="container ml-48 my-6 px-4 py-8 sm:w-4/5 bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex items-center justify-around mb-4">
          <h2 className="text-2xl font-bold py-1 px-2 w-1/2 border-2 border-black rounded-tl-lg rounded-tr-lg flex justify-center text-black bg-gray-200">
            Update Product
          </h2>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded" onClick={() => window.history.back()}>
            Back
          </button>
        </div>

        <form onSubmit={handleSubmit} className='w-3/4 mx-auto'>
          {/* Product Image */}
          <div className="my-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">Product Image</label>
            <input
              type="file"
              id="image"
              name="image"
              required
              value={formData.image}
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Other input fields follow the same pattern */}
          {/* Product Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Product Brand */}
          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium text-gray-600">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              required
              value={formData.brand}
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Product Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-600">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              value={formData.price}
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Product variant */}
          <div className="mb-4">
            <label htmlFor="variant" className="block text-sm font-medium text-gray-600">variant</label>
            <select
              id= "variant"
              name="variant"
              value={formData.variant}
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            >
              <option value={formData.variant} disabled>Select a variant</option>
    <option value="250g">250 Gram</option>
    <option value="250ml">250 ml</option>
    <option value="500g">500 Gram</option>
    <option value="500ml">500 ml</option>
    <option value="750g">750 Gram</option>
    <option value="750ml">750 ml</option>
    <option value="1kg">1 KG</option>
    <option value="1l">1 Litre</option>
    <option value="2kg">2 KG</option>
    <option value="2l">2 Litre</option>
    <option value="2.5kg">2.5 KG</option>
    <option value="2.5l">2.5 Litre</option>
    <option value="5kg">5 KG</option>
    <option value="5l">5 Litre</option>
    <option value="10kg">10 KG</option>
    <option value="10l">10 Litre</option>
    <option value="15kg">15 KG</option>
    <option value="15l">15 Litre</option>
    <option value="20kg">20 KG</option>
    <option value="20l">20 Litre</option>
            </select>
          </div>

          {/* Product Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              required
              value={formData.category}
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Product Rating */}
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-600">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              required
              step="0.1"
              max="5"
              min="0"
              value={formData.rating}
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Product Stock */}
          <div className="mb-4">
            <label htmlFor="stock" className="block text-sm font-medium text-gray-600">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              required
              value={formData.stock}
              className="form-input mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

          {/* Product Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              className="form-textarea mt-1 w-full py-1 px-3 border rounded-md transition duration-300 focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            />
          </div>

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
    </div>
  );
};

export default UpdateProduct;
