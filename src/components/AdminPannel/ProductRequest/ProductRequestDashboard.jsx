import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import ProductData from '../ProductRequest/Product';

const ProductRequestDashboard = () => {
  const [products, setProducts] = useState(ProductData);
  const [orderDates, setOrderDates] = useState([]);
  const idRef = useRef(null);
  const nameRef = useRef(null);
  const [orderDate, setOrderDate] = useState(null);

  useEffect(() => {
    // Extract unique order dates from product data
    const uniqueOrderDates = [...new Set(products.map(product => product.orderDate))];
    setOrderDates(uniqueOrderDates);
  }, [products]);

  const handleSearch = () => {
    const idValue = idRef.current.value.trim().toLowerCase();
    const nameValue = nameRef.current.value.trim().toLowerCase();
    const orderDateValue = orderDate ? format(orderDate, 'dd MMM yyyy') : '';

    const filteredProducts = ProductData.filter((product) => {
      return (
        (idValue === '' || product.id.toString().toLowerCase().includes(idValue)) &&
        (nameValue === '' || product.name.toLowerCase().includes(nameValue)) &&
        (orderDateValue === '' || product.orderDate === orderDateValue)
      );
    });

    setProducts(filteredProducts);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mt-4 mb-4">
        <h3 className="text-2xl font-bold p-2">Product Request Dashboard</h3>
        <h4 className="text-md font-semibold mr-5 text-end">Total Request: {products.length}</h4>
      </div>

      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row items-center justify-around p-3 mt-4 mb-4">
  <input
    type="text"
    className="form-control border border-gray-600 rounded-md px-4 py-2 w-full md:w-64 mb-4 md:mb-0"
    placeholder="Product ID"
    ref={idRef}
  />
  <input
    type="text"
    className="form-control border border-gray-600 rounded-md px-4 py-2 w-full md:w-64 mb-4 md:mb-0"
    placeholder="Product Name"
    ref={nameRef}
  />
  <DatePicker
    selected={orderDate}
    onChange={(date) => setOrderDate(date)}
    className="form-control border border-gray-600 rounded-md px-4 py-2 w-full md:w-64 mb-4 md:mb-0"
    placeholderText="Select Date"
    dateFormat="dd/MM/yyyy"
  />
  <button
    className="px-3 py-2 w-full md:w-32 rounded-md text-md text-white font-semibold bg-green-500 hover:bg-green-800"
    onClick={handleSearch}
  >
    Search
  </button>
</div>


      {/* Display table */}
      <div className="text-gray-600 justify-between flex items-center">
        <table className="w-screen table-auto text-center">
          <thead>
            <tr className="text-center bg-slate-900 border border-white text-white">
              <th className="border-y border-l border-gray-300 py-2 px-3 font-semibold">Product ID</th>
              <th className="border-y border-l border-gray-300 py-2 px-3 font-semibold">Product Name</th>
              <th className="border-y border-x border-gray-300 py-2 px-3 font-semibold">Product Image</th>
              <th className="border-y border-l border-gray-300 py-2 px-3 font-semibold">Order Date</th>
              <th className="border-y border-x border-gray-300 py-2 px-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="text-center bg-slate-700 text-white" key={product.id}>
                <td className="border-t border-l border-gray-300 py-2 px-3">{product.id}</td>
                <td className="border-t border-l border-gray-300 py-2 px-3">{product.name}</td>
                <td className="border-t border-l border-gray-300 py-2 px-3 flex items-center justify-center">
                  <img src={product.image} alt="Product" className="h-[80px] w-[80px] rounded-md" style={{ objectFit: 'cover'}} />
                </td>
                <td className="border-t border-l border-gray-300 py-2 px-3">{product.orderDate}</td>
                <td className="border-t border-x border-gray-300 py-2 px-2">
                   <div className="flex items-center justify-center gap-4">
                      <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">Accept</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Reject</button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductRequestDashboard;
