import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container,Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";


const Payment = ({ setPaymentMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }
    setPaymentMethod(selectedMethod);
    navigate("/summary");
  };

  return (
    <>
      <Container className="mt-5 ">
      
        <Card style={{ width: '20rem' }} className="">
          <ListGroup >
            <ListGroup.Item >
              <label className="d-flex ">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <h3 className="ms-3">Cash On Delivery</h3>
              </label>
            </ListGroup.Item>
            <ListGroup.Item varient='flush'>
              <label className="d-flex">
                <input
                  type="radio"
                  name="payment"
                  value="Credit Card"
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <h3 className="ms-3">Credit Card</h3>
              </label>
            </ListGroup.Item>
            <ListGroup.Item varient='flush'>
              <label className="d-flex">
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <h3 className="ms-3">Upi</h3>
              </label>
            </ListGroup.Item>
          </ListGroup>
        </Card><button onClick={handlePayment} style={{ marginTop: "20px" }}>
          Confirm Payment Method
        </button>
        
      </Container>


    </>
  );
};

export default Payment;
