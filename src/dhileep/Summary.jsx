import React from "react";
import { Link } from "react-router-dom";

const Summary = ({ cart, paymentMethod }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Payment Method: {paymentMethod}</h2>
      <h2>Total Amount: ${totalAmount}</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Summary;
