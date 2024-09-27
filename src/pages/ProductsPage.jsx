import React, { useEffect, useState } from "react";
import ProductsService from "../services/productsService";
import axios from "axios";
import LoadingComponent from "../components/LoadingComponent";
import ProductCard from "../components/ProductCard";
function ProductsPage() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        setAllData(res.data.products);
        console.log(res.data.products);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex flex-wrap gap-5">
          {allData.map((el, i) => {
            return <ProductCard key={i} id={i} product={el} />;
          })}
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default ProductsPage;
