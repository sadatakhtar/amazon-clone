import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    //stripe stuff
  }

  const handleChange = (e) => {
    //Listen for changes in cardElement
    setDisabled(e.empty);
    setError(e.empty ? e.error.message : "");
  }


  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
           <div className="payment_address">
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Birmingham B1 1AB</p>
            </div>
        </div>

        {/* payment section - review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>

        {/* payment section - payment method */}
        <div className="payment_section">
        <div className="payment_title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment_details">
            {/* strip stuff here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
            </form>
            </div>

        </div>
        
      </div>
    </div>
  );
}

export default Payment;
