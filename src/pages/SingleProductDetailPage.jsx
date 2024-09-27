import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsService from "../services/productsService";
import LoadingComponent from "../components/LoadingComponent";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Rating } from "@mui/material";
function SingleProductDetailPage() {
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(1);
  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  function handleIncres(){
    if(product.stock>=counter){
        setCounter(counter+1);
    }
  }
  function handleDecres(){
    if(counter>1){
        setCounter(counter-1)
    }
  }
  //kako dobiti id iz url-a
  let { id } = useParams();
  console.log(id);
  //uzmi taj 1 proizvod
  useEffect(() => {
    ProductsService.getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col gap-6 flex-1">
            <img
              src={product.images[currentImage]}
              alt=""
              className="w-[400px]"
            />
            <div className="flex gap-2">
              {product.images.map((el, i) => {
                return (
                  <img
                    key={i}
                    src={el}
                    className="w-[20%] border border-gray-600 object-contain"
                    alt=""
                    onClick={() => handleCurrentImage(i)}
                  />
                );
              })}
            </div>
          </div>
          <div className="content flex-1">
            <div className="border border-black p-8">
              <h3>{product.title}</h3>
              <h4>Price: $ {product.price}</h4>
              <p>Description: {product.description}</p>
            </div>
            <div className="p-8 mt-8 flex  flex-col gap-3">
              <div className="flex items-center gap-1">
                Stock:{" "}
                {product.stock > 0 ? (
                  <p className="flex items-center gap-1 text-green-600">
                    In stock {product.stock} <FaCheck color="green" />
                  </p>
                ) : (
                  <p className="flex items-center gap-1 text-red-500">
                    Out of stock {product.stock} <ImCross color="red" />{" "}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-1">
                <p>Raiting:</p>
                <Rating
                  name="half-rating"
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly
                />
              </div>
              <p>Brand: {product.brand}</p>
              <div className="flex items-center gap-2">
                <button onClick={handleIncres} className="bg-slate-400 px-4 ">
                  +
                </button>
                <span className="bg-slate-400 px-4 ">{counter}</span>
                <button onClick={handleDecres} className="bg-slate-400 px-4 ">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default SingleProductDetailPage;
