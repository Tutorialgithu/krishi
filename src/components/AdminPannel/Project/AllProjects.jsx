import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import UpdateProduct from './UpdateProduct';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';
import { toast } from 'react-toastify';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const nameRef = useRef('');
  const brandRef = useRef('');
  const categoryRef = useRef('');
  const [token,setToken]=useState('')
  useEffect(() => {
    const dt = localStorage.getItem('DKAUTH');

    if (dt) {


      const parsedDt = JSON.parse(dt);
      setToken(parsedDt.token);
    } else {
      console.log("No data found in localStorage for 'DKAUTH'");
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://bhartiyabiotech.ap-south-1.elasticbeanstalk.com/products'); // Adjust the API endpoint as necessary
      console.log(response,"res")
      setProjects(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
   
    fetchProjects();
  }, []);

  const handleSearch = () => {
    const filteredProjects = projects.filter((project) => {
      const nameValue = nameRef.current.value.trim().toLowerCase();
      const brandValue = brandRef.current.value.trim().toLowerCase();
      const categoryValue = categoryRef.current.value.trim().toLowerCase();

      return (
        (nameValue === '' || project.name.toLowerCase().includes(nameValue)) &&
        (brandValue === '' || project.brand.toLowerCase().includes(brandValue)) &&
        (categoryValue === 'select category' || project.category.toLowerCase() === categoryValue)
      );
    });

    setProjects(filteredProjects);
  };

  const apiUrl = 'http://bhartiyabiotech.ap-south-1.elasticbeanstalk.com/products';

  const handleDelete = async (id) => {
    try {
      console.log(id, "this is id find for delete function");
      const apiUrl = 'http://bhartiyabiotech.ap-south-1.elasticbeanstalk.com/products'; 
      const response = await axios.delete(`${apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      console.log(response.data, "this is response data");
     toast.success("Product Deleted Successfully")
      fetchProjects();
    
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
  
  
  

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mt-4 mb-4">
        <h3 className="text-2xl font-bold p-2">Product Dashboard</h3>
        <h4 className="text-md font-semibold pr-5">Total Projects: {projects.length}</h4>
      </div>

      {/* Search Inputs */}
      <div className="flex items-center justify-around p-3 mt-4 mb-4">
        <input
          type="text"
          className="border border-gray-600 rounded-md px-4 py-2 w-64"
          placeholder="Product Name"
          ref={nameRef}
        />
        <input
          type="text"
          className="border border-gray-600 rounded-md px-4 py-2 w-64"
          placeholder="Brand Name"
          ref={brandRef}
        />
        <select className="border border-gray-600 rounded-md py-2 w-64" ref={categoryRef}>
          <option>Select Category</option>
          {projects.map((project, index) => (
            <option key={index}>{project.category}</option>
          ))}
        </select>
        <button className="px-3 py-2 w-32 rounded-md text-md text-white font-semibold bg-green-500" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="grid mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="p-4">
              <img src={project.imageUrl} alt="product image" className="w-full h-48 object-cover" />
              <h3 className="text-xl font-bold mt-4 mb-2">{project.productName}</h3>
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Brand:</span> {project.brand}
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Category:</span> {project.category}
              </div>
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <div className="flex items-center mb-2">
                <div className="font-semibold text-lg text-black">Price: ₹{project.price}</div>
              </div>
              <div className="flex items-center mb-2">
                <div className="font-semibold">Rating:</div>
                <div className="text-sm ml-1">{project.rating}</div>
              </div>
              <div className="flex items-center mb-4">
                <div className="font-semibold">Stock:</div>
                <div className="text-sm ml-1">{project.stock}</div>
              </div>
              <div className="flex items-center space-x-6 mb-2">
                <Link to={`/update-product/${project.id}`} className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mr-2">
                  Edit
                </Link>
              <button  onClick={() => handleDelete(project.productId)} className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;