import React from 'react'
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../logowhite.svg';
const Footer = () => {
  return (
    <>
    <div className='quickaction'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} sm={8} md={10}>
          <div className="main-heading main-heading-left main-heading-white ">
                <h1>Transform the Approach to Your Accounting Practices</h1>
                <div className="bottom-border">
                  <span className="blue"></span>
                  <span className="yellow"></span>
                </div>
              </div>
          </Col>
          <Col xs={12} sm={4} md={2}>
          <Button variant="light">Get Started Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
    <footer className="text-light">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <p className='footer-logo'><img src={logo}  alt="logo" /></p>
            <p>A Complete system is where a retail transaction occurs, involving a customer's payment for goods or services. It can also refer to the technology and hardware used for this transaction.</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Features</h5>
            <ul>
              <li><NavLink to="./Sales">Sales</NavLink></li>
              <li><NavLink to="./Purchases">Purchases</NavLink></li>
              <li><NavLink to="./Accounting">Accounting</NavLink></li>
              <li><NavLink to="./Inventory">Inventory</NavLink></li>
              <li><NavLink to="./Manufacturing">Manufacturing</NavLink></li>
              <li><NavLink to="./POS">POS</NavLink></li>
              <li><NavLink to="./Reporting">Reporting</NavLink></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Industries</h5>
            <ul>
              <li><NavLink to="./Retail">Retail Store</NavLink></li>
              <li><NavLink to="./Book">Book Store</NavLink></li>
              <li><NavLink to="./Shoe">Shoe Store</NavLink></li>
              <li><NavLink to="./DistributionWholesale">Distribution & Wholesale</NavLink></li>
              <li><NavLink to="./RestaurantsBakers">Restaurants Bakers</NavLink></li>
              <li><NavLink to="./GarmentsFashion">Garments Fashion</NavLink></li>
              <li><NavLink to="./ElectronicsAppliances">Electronics Appliances</NavLink></li>
              <li><NavLink to="./ComputerAccessories">Computer Accessories</NavLink></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Quick Links</h5>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Sales">Features</NavLink></li>
              <li><NavLink to="/Retail">Business Types</NavLink></li>
              <li><NavLink to="/Pricing">Pricing</NavLink></li>
              <li><NavLink to="/Clients">Clients</NavLink></li>
              <li><NavLink to="/FreeDemo">Software Demo</NavLink></li>
              <li><NavLink to="/HelpCenter">Help</NavLink></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    <div className='copyright'>Copyright © 2010-2023 <strong><NavLink to="/">Jadeed Munshi</NavLink></strong>. All rights reserved.</div>
    </>
  )
}

export default Footer
