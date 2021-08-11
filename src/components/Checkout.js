import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
          className="checkout_ad"
        />
        <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* basketItem */}
        </div>
        
      </div>

      <div className="checkout_right">
          <h2>The subtotal </h2>

      </div>

    </div>
  );
}

export default Checkout;
