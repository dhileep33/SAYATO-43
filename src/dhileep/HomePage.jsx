import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
const navigate = useNavigate();

    
    const cards = [
        { id: 1, title: 'Breakfast', imgSrc: 'path-to-breakfast.jpg', description: 'Start your day with energy!', path: '/breakfast' },
        { id: 2, title: 'Lunch', imgSrc: 'path-to-lunch.jpg', description: 'Fuel your afternoon!', path: '/lunch' },
        { id: 3, title: 'Dinner', imgSrc: 'path-to-dinner.jpg', description: 'Relax with a cozy dinner!', path: '/dinner' },
    ];

    return (
        <Container className="mt-5">
            <Row>
                {cards.map((card) => (
                    <Col key={card.id} sm={6} md={4} className="mb-4">
                        <Card
                            className="h-100"
                            onClick={() => navigate(card.path)} 
                            style={{ cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={card.imgSrc} alt={card.title} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomePage;
