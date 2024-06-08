import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const dt = localStorage.getItem("DKAUTH");
    if (dt) {
      const parsedDt = JSON.parse(dt);
      setToken(parsedDt.token);
    } else {
      console.log("No data found in localStorage for 'DKAUTH'");
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://bhartiyabiotech.ap-south-1.elasticbeanstalk.com/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(setProducts(response.data));

        // Extract unique categories from the products
        const uniqueCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        setError("Error fetching the products");
        console.error("Error fetching the products:", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchProducts();
    }
  }, [dispatch, token]);

  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    const newRange = [...priceRange];
    newRange[name === "min" ? 0 : 1] = Number(value);
    setPriceRange(newRange);
  };

  const filteredProducts = products.filter((product) => {
    const withinPriceRange = product.varients.some(
      (variant) =>
        variant.price >= priceRange[0] && variant.price <= priceRange[1]
    );
    const withinCategory = category ? product.category === category : true;
    return withinPriceRange && withinCategory;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      <div className="font-sans">
        <div className="p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-lg">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">
            New Arrival 🌱
          </h2>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-evenly md:justify-between mb-4">
              <div>
                <label className="mr-2">Min Price:</label>
                <input
                  type="number"
                  name="min"
                  value={priceRange[0]}
                  onChange={handlePriceChange}
                  className="border p-1"
                />
              </div>
              <div>
                <label className="mr-2">Max Price:</label>
                <input
                  type="number"
                  name="max"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  className="border p-1"
                />
              </div>
              <div>
                <label className="mr-2">Category:</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border p-1"
                >
                  <option value="">All</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {console.log(filteredProducts, "filteredProducts")}
            
            {filteredProducts.map((product) => (
              
              <Link
                to={`/product/${product.productId}`}
                key={product.productId}
                className="bg-gray-100 p-2 overflow-hidden cursor-pointer"
              >
                <div className="bg-white flex flex-col h-full">
                  <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center flex-1">
                    <h3 className="text-lg font-semibold text-gray-600">
                      {product.productName}
                    </h3>
                    <h3 className="text-lg font-semibold text-gray-600">
                      {product.description}
                    </h3>
                    <h3 className="text-lg font-semibold text-gray-600">
                      {product.category}
                    </h3>

                    <h4 className="text-xl text-gray-600 font-bold mt-2">
                      ${product.varients[0].price}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
