import React from "react";
import { Card, Row, Container, Col, Button } from "react-bootstrap";
import TestimonialsSlide from "./TestimonialsSlide";
const Testimonial = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="main-heading main-heading-left">
              <h1>
                People <br/><span>Feedback</span>
              </h1>
              <div className="bottom-border">
                <span className="blue"></span>
                <span className="yellow"></span>
              </div>
            </div>
            <p>
              A Point of Sale (POS) system refers to the place and time where a
              retail transaction is completed. It is the point at which a
              customer makes a payment in exchange for goods or services. The
              term "point of sale" can also refer to the technology and hardware
              used to facilitate this transaction.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <TestimonialsSlide/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
