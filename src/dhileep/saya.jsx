import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

import './saya.css'
import './NavbarComponent.css';




const sayato = () => {

    const menu = [
        { id: 1, title: 'Break Fast Items', imgSrc: "src/assets/saya/m1.jpeg", description: 'Start your day right with our delicious breakfast offerings, made fresh each morning.', path: '/b' },
        { id: 2, title: 'Lunch Items', imgSrc: "src/assets/saya/m2.jpg", description: 'Enjoy a satisfying lunch with our variety of savory dishes to keep you energized', path: '/l' },
        { id: 3, title: 'Dinner Items', imgSrc: "src/assets/saya/m3.jpeg", description: 'Join us for dinner and indulge in our exquisite evening specials. check the dinner ', path: '/d' },
        { id: 4, title: 'Dessert Items', imgSrc: "src/assets/saya/payasam.jpg", description: 'Join us for dinner and indulge in our exquisite evening specials. check the dinner ', path: '/dr' }
    ];



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


    const cont = useNavigate()
    const Contact = () => {
        cont('/C')
    }
    const navigate = useNavigate();

    const styles = {
        footer: {
            backgroundColor: '#1C1C1C',
            color: '#fff',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },
        footerContent: {
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        },
        footerSection: {
            flex: '1',
            margin: '20px',
            minWidth: '250px',
        },
        footerLogo: {
            width: '150px',
            marginBottom: '15px',
        },
        footerTitle: {
            fontSize: '1.8rem',
            marginBottom: '20px',
            fontWeight: 'bold',
            color: '#FFD700',
        },
        footerLinks: {
            listStyleType: 'none',
            padding: '0',
        },
        footerLinkItem: {
            marginBottom: '10px',
        },
        footerLink: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.3s ease',
        },
        footerLinkHover: {
            color: '#4CAF50', // Hover color
        },
        footerIcon: {
            fontSize: '24px',
            margin: '0 10px',
            transition: 'color 0.3s ease',
            color: 'white',
        },
        footerIconHover: {
            color: '#4CAF50', // Hover effect for icons
        },
        footerCallButton: {
            padding: '12px 30px',
            backgroundColor: '#FFD700',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            textDecoration: 'none',
            marginTop: '20px',
        },
        footerBottom: {
            marginTop: '40px',
            fontSize: '14px',
            color: '#888',
        },
        mapImage: {
            width: '100%',
            height: '200px',
            borderRadius: '10px',
            objectFit: 'cover',
        },
    };

    return (
        <>
            <div className="contact-bar bg-dark text-white py-2 " id="home">
                <Container>
                    <Row>
                        <Col className=" align-items-center flex-wrap">
                            <div className="contact-info fs-3 ms-2  d-flex justify-content-center ">
                                <h1 className='sayato'><span className='s'>S</span><span className='a'>A</span><span className='y'>Y</span><span className='aa'>A</span><span className='t'>T</span><span className='o'>O</span></h1>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center " href="#home">
                        <img
                            src="src/assets/saya/logooff.webp"
                            alt="sayato Logo"
                            className="d-inline-block align-top rounded-circle"
                        />
                        <span className="ms-2">SAYATO</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-5 navl">
                            <Nav.Link className='navl home' href='#home' >  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
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
                            <Nav.Link onClick={Contact}  className='home me-3'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-inbound" viewBox="0 0 16 16">
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
            {/* carousal */}
            <div className="container-fluid " >
                <div className="row ">
                    <div className="col">
                        <Carousel className='dhileep'>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100 " style={{ height: '55vh' }}
                                    src='/src/assets/saya/IDL.png'
                                    alt="Image One" />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block  w-100 " style={{ height: '55vh' }}
                                    src='/src/assets/saya/BRI.png'
                                    alt="Image Two" />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block  w-100" style={{ height: '55vh' }}
                                    src='/src/assets/saya/MUT.png'
                                    alt="Image three" />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block  w-100" style={{ height: '55vh' }}
                                    src='/src/assets/saya/CHI.png'
                                    alt="Image four" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

            </div>
            <div>
                <hr className=' line '></hr>
                <p className="text-center fs-4 mt-3 animated-text"> Since 2005  </p><hr className=' line'></hr></div>
           
           
           {/* since */}
            <Container className="con2-img mt-3 ">
                <Row className=' d-flex justify-content-evenly'>
                    <Col md={4} className="con2-img" data-aos="fade-right">
                        <img src="src/assets/saya/logooff.webp" alt="Sample" className="img-fluid con2-image" width={300} />
                    </Col>
                    <Col md={6} xs={12} className="con2-col" data-aos="fade-left">
                        <h2 className="con2-h">SAYATO SINCE 2005 </h2>
                        <h3 className="con2-p">
                            Welcome to Sayato Restaurant, proudly serving delicious flavors since 02-03-2005🍽️✨
                        </h3>
                        <h3 className='con2-p'>
                            Thank you for being a part of our journey.Sit back, relax,and let us take you on a culinary adventure.Enjoy your time at Sayato Restaurant🌟
                        </h3>
                    </Col>
                </Row>
            </Container>


            <div>
                <hr className=' line '></hr>
                <p className="text-center fs-4 mt-3 animated-text">Menu</p>
                <hr className=' line'></hr>

            </div>
{/* card map */}
            <Container className='mt-3'>
                <Row className='d-flex justify-content-evenly'>
                    {menu.map(thumbnail => (
                        <Col key={thumbnail.id} sm={6} md={6} lg={3} xs={12} className="mb-4">
                            <Card className="h-100"
                                onClick={() => navigate(thumbnail.path)}
                                style={{ cursor: 'pointer' }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card.Img variant="top" src={thumbnail.imgSrc} className='img-fluid' />
                                    <Card.Body>
                                        <Card.Title>{thumbnail.title}</Card.Title>
                                        <Card.Text>{thumbnail.description}</Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div>
                <hr className=' line '></hr>
                <p className="text-center fs-4 mt-3 animated-text">The World Best Restaurent </p>
                <hr className=' line'></hr>

            </div>

            {/* 7th best  */}
            <Container className="con2-img mt-1">
                <Row className=' d-flex justify-content-evenly'>
                    <Col md={6} xs={12} className="con2-col">
                        <h2 className="con2-h"> The World's 7th Best Restaurant: </h2>
                        <h3 className="con2-p">
                            From the heart of our kitchen to your table, experience the magic that ranks us among the world's finest.
                        </h3>
                        <h3 className='con2-p'>
                            Thank you for being a part of our journey.Sit back, relax,and let us take you on a culinary adventure.Enjoy your time at Sayato Restaurant🌟
                        </h3>
                    </Col>
                    <Col md={4} className="con2-img">
                        <img src="/src/assets/saya/7th.jpeg" alt="Sample" className="img-fluid con2-image"  />
                    </Col>

                </Row>
            </Container>


            

            {/* footer  */}

            <Container-fluid >
                <footer
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
                        <a href="" style={{ color: "#D4AF37", textDecoration: "none" }} onClick={Contact}>
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

    )
}

export default sayato