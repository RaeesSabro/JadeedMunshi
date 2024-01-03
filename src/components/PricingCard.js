import React from 'react';
import { Card, Row, Container, Col, Button} from "react-bootstrap";
import Header from "./InnerHeader";
const PricingCard = ({ plans }) => {
  return (
    <>
      <Container>
        <Row>
          {plans.map((plan, index) => (
            <Col xs={12} md={3}>
                <Card  key={index} className="pricing-card text-center">
                  <Card.Body>
                  <h4>{plan.payFor}</h4>
                  <h2>{plan.name}</h2>
                  </Card.Body>
                  <Card.Text className='pricingFeatures'>{plan.features}</Card.Text>
                  <Card.Body>
                    <h2><small>PKR. </small>{plan.price}</h2>
                    <h5>You Saved Rs. {plan.save}</h5>
                    <p>Or</p>
                    <Button variant="primary" className='mb-4'>Select Plan</Button>
                    <Card.Text><h6>{plan.freetrail}</h6></Card.Text>
                  </Card.Body>
                </Card >
            </Col>
          ))}
        </Row>
        
      </Container>
      
    </>
  );
};

// Example usage of the PricingCard component
const App = () => {
  const pricingPlans = [
    {
      name: 'One User',
      payFor: 'Pay For',
      price: '2700/m',
      // features: ['Feature 1', 'Feature 2', 'Feature 3'],
      features: 'All Features Included',
      save: '13,884',
      freetrail: 'Start Free Trial Now',
    },
    {
      name: 'Three User',
      payFor: 'Pay For',
      price: '2700/m',
      features: 'All Features Included',
      save: '13,884',
      freetrail: 'Start Free Trial Now',
    },
    {
      name: 'Five User',
      payFor: 'Pay For',
      price: '2700/m',
      features: 'All Features Included',
      save: '13,884',
      freetrail: 'Start Free Trial Now',
    },
    {
      name: 'Ten User',
      payFor: 'Pay For',
      price: '2700/m',
      features: 'All Features Included',
      save: '13,884',
      freetrail: 'Start Free Trial Now',
    },
  ];

  return (
    <>
      <PricingCard plans={pricingPlans} />
    </>
  );
};

export default App;
