import React from 'react'
import { Row, Container, Col, Button, Image } from "react-bootstrap";
import BusinessCard from './BusinessCard';
import supperStore from '../img/supperStore.jpg';
import GarmentsFashion from '../img/GarmentsFashion.jpg';
import industry from '../img/industry.jpg';
import bakery from '../img/bakery.jpg';
import {
  faLaptop,
  faBook,
  faUtensils,
  faMicrochip,
  faShoePrints,
  faTShirt,
  faStore,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";
const BusinessTypes = () => {
  return (
    <div>
      <section>
        <Container>
            <Row className='align-items-center'>
              <Col xs={12} sm={6} md={4} className='businessTypeImage'>
                <span className='imgCard'><Image src={supperStore}/></span>
                <span className='imgCard'><Image src={GarmentsFashion}/></span>
                <span className='imgCard'><Image src={industry}/></span>
              </Col>
              <Col xs={12} sm={6} md={8}>
                <div className="main-heading main-heading-left">
                  <h1>Jadeem Munshi can Serve all <br/><span>Business Industries</span></h1>
                  <div className="bottom-border mb-3">
                    <span className="blue"></span>
                    <span className="yellow"></span>
                  </div>
                </div>
                <p>A Point of Sale (POS) system refers to the place and time where a retail transaction is completed. It is the point at which a customer makes a payment in exchange for goods or services. The term "point of sale" can also refer to the technology and hardware used to facilitate this transaction.</p>
                <Row>
                  <Col xs={12} sm={6} md={4} className='mb-2'>
                    <BusinessCard
                      icon={faStore}
                      title="Retail Store"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='mb-2'>
                    <BusinessCard
                      icon={faTShirt}
                      title="Garments & Fashion"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='mb-2'>
                    <BusinessCard
                      icon={faShoePrints}
                      title="Shoe Stores"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='mb-2'>
                    <BusinessCard
                      icon={faMicrochip}
                      title="Electronics & Appliances"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='mb-2'>
                    <BusinessCard
                      icon={faBook}
                      title="Book Stores"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='mb-2'>
                    <BusinessCard
                      icon={faUtensils}
                      title="Restaurants & Bakers"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='mb-2'>
                    <BusinessCard
                      icon={faIndustry}
                      title="Distribution & Wholesale"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={4} className='mb-2'>
                    <BusinessCard
                      icon={faLaptop}
                      title="Computer Accessories"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
    </div>
  )
}

export default BusinessTypes
