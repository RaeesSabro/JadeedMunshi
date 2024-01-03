import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ServiceTypewriter from './ServiceTypewriter';
const HeaderHome = () => {
  return (
    <header className='homeHeader'>
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={12}>
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <div className='yellowtag'>
                  <h4>Beyond the Counter: Next-Level Sales</h4>
                </div>
              </Col>
            </Row>
            <ServiceTypewriter/>
            <p>Effortlessly streamline your business operations with <strong>Jadeed Munshi's</strong> retail point-of-sale (POS) system!</p>
          </Col>
        </Row>
      </Container>
      </header>
  )
}

export default HeaderHome
