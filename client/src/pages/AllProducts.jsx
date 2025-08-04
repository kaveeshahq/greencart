import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);
  return (
    <>
       <Seo
        title="GreenCart - All Products"
        description="Here is the all products in Greencart."
      />
    <div className="mt-16 flex flex-col">
            {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in-up">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">All Products</span>
          </div>
        </nav>
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
        </>

  );
};

export default AllProducts;
