import { div, img } from "framer-motion/client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './saya.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";



const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const itemToRemove = cart.find((item) => item.id === id);
    const confirmRemove = window.confirm(
      `Are you sure you want to remove ${itemToRemove.name} from the cart?`
    );
    if (confirmRemove) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>



      <div className="contact-bar bg-dark text-white py-2 " id="home"      
  
  
    
    data-aos-once="false">
        <Container>
          <Row>
            <Col className=" align-items-center flex-wrap">
              <div className="contact-info fs-3 ms-2  d-flex justify-content-center ">
                <h1 className="sayato">SAYATO-CART</h1>
              </div>


            </Col>
          </Row>
        </Container>
      </div>



      <div>

        {cart.length === 0 ? (
          <>

            <Card className="cart-alert">
              <Card.Header className="text-center">Oops</Card.Header>
              <Card.Body>
                <Card.Title> <h1>Your Cart Is Empty</h1> </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa nemo totam excepturi! Reiciendis soluta sed minima temporibus provident sit autem quas, id ad non maxime, voluptas nesciunt ipsam quaerat!
                </Card.Text>
                <Link to="/H"><button>Back to Home</button></Link>
              </Card.Body>
            </Card></>
        ) : (
          <div>


            <h1 className="text-center">Welcome To Cart </h1>


          </div>
        )}
      </div>






      {cart.map((item, index) => (
        <Container  >
          <Row className="d-flex justify-content-center mt-5">
            <Col sm={6} md={3} lg={3} xs={6}>
              <Card style={{ width: '100%' }} className="cart-card"  >
                <Card.Body className=" align-items-center" >
                  <h1 className="text-center">{item.name}</h1><div className='row' >
                    <img className=' img-fluid' src={item.img} alt="" height={100} width={200} />
                    <Card.Text className="mt-1">
                      Your Order Is Processing
                    </Card.Text>
                  </div>
                  <div className='row mt-2'>
                    <div className='d-flex justify-content-around'>
                      <Button variant="outline-primary" size="sm" onClick={() => increaseQuantity(item.id)} className=" btn col-4">+</Button>
                      <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg></Button>
                      <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity(item.id)} className='btn col-4' >-</Button>


                    </div>
                  </div>
                </Card.Body>
              </Card>
              <div className=" text-center">
                <h5> Quantity: {item.quantity}</h5>
                <h5>Total Amount: {totalAmount} Rs</h5>
                <button onClick={() => navigate("/pay")}>Proceed to Payment</button>
              </div>
            </Col></Row>
        </Container>))}

        {/* footer */}
      <Container-fluid >
        <footer className="footer-cart"
          style={{
            backgroundColor: "#2C2C2C",
            color: "#F1F1F1",
            textAlign: "center",
            padding: "20px 0",
            display: "flex",
            flexDirection: "column",
            borderTop: "2px solid #D4AF37",
          }}
        >

          <div>
            <img
              src="src/assets/saya/logooff.webp"
              alt="Dhileep's Sayato Logo"
              style={{ height: "60px", marginBottom: "10px" }}
            />
          </div>


          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            <div>
              <FaMapMarkerAlt style={{ color: "#D4AF37", marginRight: "8px" }} />
              Sayato Street-Birmingam-England-43
            </div>
            <div>
              <FaPhone style={{ color: "#D4AF37", marginRight: "8px" }} />
              +123 43-43-43
            </div>
            <div>
              <FaEnvelope style={{ color: "#D4AF37", marginRight: "8px" }} />
              sayatores43@gmail.com
            </div>
          </div>


          <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "14px" }}>
            <a href="#" style={{ color: "#D4AF37", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "#D4AF37", textDecoration: "none" }}>
              Terms of Service
            </a>
            <a href="" style={{ color: "#D4AF37", textDecoration: "none" }}>
              Contact Us
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
            <a href="#" style={{ color: "#D4AF37", fontSize: "20px" }}>
              <FaFacebook />
            </a>
            <a href="#" style={{ color: "#D4AF37", fontSize: "20px" }}>
              <FaInstagram />
            </a>
            <a href="#" style={{ color: "#D4AF37", fontSize: "20px" }}>
              <FaTwitter />
            </a>
          </div>

          <p style={{ fontSize: "14px", marginTop: "15px" }}>
            © 2025 Dhileep's Sayato. All Rights Reserved.
          </p>
        </footer>
      </Container-fluid>


    </>


  );
};

export default Cart;
