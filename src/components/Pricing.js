import React from 'react';
import { Card, Row, Container, Col, Button} from "react-bootstrap";
import PricingCard from './PricingCard'
import Header from "./InnerHeader";
const Pricing = () => {
  return (
    <>
    <Header title="Pricing" />
    <section>
      <Container>
        <Row>
          <div className="main-heading text-center">
            <h1>Jadeed Munshi <span>Pricing</span></h1>
            <div className="bottom-border">
              <span className="blue"></span>
              <span className="yellow"></span>
            </div>
          </div>
        </Row>
      </Container>
      <PricingCard/>
      <Container>
        <Row className='mt-4'>
          <Col className='text-center'><h4>For More Then Ten User</h4>
              <Button variant="primary" className='mb-4'>Contact Us</Button>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Pricing;
