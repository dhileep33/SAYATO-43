import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Card, Container, Row, Col } from "react-bootstrap";
import './saya.css'

const Menu1 = [
  { id: 1, name: "Chicken Briyani", price: 250 , img: '/src/assets/saya/briyani.jpg' },
  { id: 2, name: "Mutton Briyani", price: 300 , img: '/src/assets/saya/mutton.jpg' },
  { id: 4, name: "Veg-Meals", price: 150, img: '/src/assets/saya/veg.jpg' },
  { id: 5, name: "Non-Veg Meals", price: 80, img: '/src/assets/saya/nonveg.jpg'},
  { id: 6, name: "Parotta", price: 15, img: '/src/assets/saya/parotta.jpg'  },
];

const Bf = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // navigate 

  const Bf = useNavigate()
  const Breakfast = () => {
    Bf('/b')
  }

  const LN = useNavigate()
  const Lunch = () => {
    LN('/l')
  }
  const DR = useNavigate()
  const Dinner = () => {
    DR('/d')
  }
  const DD = useNavigate()
  const Dessert = () => {
    DD('/dr')
  }
  // const CR = useNavigate()
  // const cart = () => {
  //   DD('/cr')
  // }

  const cont = useNavigate()
  const Contact = () => {
    cont('/C')
  }

  const Hom = useNavigate()
  const Home = () => {
    cont('/H')
  }
  const navigates = useNavigate();

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart!`);
  };

  return (
    <>

      {/* navbar */}

      <div className="contact-bar bg-dark text-white py-2 " id="home">
        <Container>
          <Row>
            <Col className=" align-items-center flex-wrap">
              <div className="contact-info fs-3 ms-2  d-flex justify-content-center ">
                <h1 className="sayato">SAYATO-LUNCH</h1>
              </div>


            </Col>
          </Row>
        </Container>
      </div>
      <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
        <Container>
          <Navbar.Brand className="d-flex align-items-center " href="#home">
            <img
              src="src/assets/saya/logo.png"
              alt="sayato Logo"
              className="d-inline-block align-top rounded-circle"
            />
            <span className="ms-2">SAYATO</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5 navl">
              <Nav.Link className='navl home' href='#home' onClick={Home} >  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
              </svg>  </Nav.Link>
              <NavDropdown className='' title={<span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-menu-down" viewBox="0 0 16 16">
                <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
              </svg></span>} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={Breakfast}>Break Fast</NavDropdown.Item>
                <NavDropdown.Item onClick={Lunch} >Lunch</NavDropdown.Item>
                <NavDropdown.Item onClick={Dinner}>Dinner</NavDropdown.Item>
                <NavDropdown.Item onClick={Dessert}>Dessert and Drinks</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={Contact} className='home'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-inbound" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg></Nav.Link>
              <Nav.Link onClick={() => navigate("/cart")} className='home'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg></Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* card*/}

      <Container className='mt-3 '>
        <Row >
          {Menu1.map((product) => (
            <Col key={product.id} sm={6} md={6} lg={3} xs={12} className="mb-4  d-flex justify-content-center">
              <Card  className="box"
                  style={{ cursor: 'pointer', width: '18rem'
                  }}  >

                
                <Card.Body  className="break-card">
                <Card.Img variant="top" src={product.img} className="img-fluid  " style={{height:250,width:250}}  />
                  <Card.Title> <h2>{product.name}</h2></Card.Title>
                  <Card.Text> <h3> RS: {product.price}</h3> </Card.Text>
                  <button className="click-butt" onClick={() => addToCart(product)}>Add to Cart</button>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>

        <Col className="text-center">
          <button onClick={() => navigates("/cart")} style={{ marginTop: "20px" }}>
            Go to Cart ({cart?.reduce((total, item) => total + item.quantity, 0) || 0})
          </button>
        </Col>


      </Container>


      
    </>



  );
};

export default Bf;