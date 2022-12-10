import React from "react";
import { useState, useEffect} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


export default function Shop() {
  const [products, setProducts] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  // const [loggedInUser, setloggedInUser] = useState({});

  //add to cart function
  // const addToCart = () => {
  //   setQuantity(quantity + 1);
  //   console.log(quantity);
  //   document.getElementById("cart").innerHTML = quantity;
  // };

 

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <div className="row products-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md-4 my-2">
              <Link
                to={`${product.title}`}
                state={{
                  rate: product.rate,
                  title: product.title,
                  image: product.image,
                  description: product.description,
                  price: product.price,
                }}
              >
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-img-actions">
                      <img
                        src={product.image}
                        className="card-img img-fluid"
                        alt={product.title}
                      />
                    </div>
                  </div>

                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        <p  className="text-default mb-2 product-text" > {product.title} </p>
                      </h6>

                      <p className="text-muted" data-abc="true"> {product.category} </p>
                    </div>

                    <h3 className="mb-0 font-weight-semibold product-text">${product.price}</h3>

                    <div>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
