import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product,id }) {
  return (
    <div className="w-[300px] border-2 border-blue-400 flex flex-col justify-center items-center gap-2">
      <img src={product.thumbnail} alt="" className="w-[200px] h-[200px] object-center" />
      <h2>{product.title.substring(0, 15)}</h2>
      <p className="font-bold">{product.price}$</p>
      <Link to={`/singleProduct/${product.id}`}>Show More</Link>
    
    </div>
  );
}

export default ProductCard;
