import React from "react";
import { Row, Container, Col, Button, Image } from "react-bootstrap";
import HeaderHome from "./HeaderHome";
import HomeMainFeatures from "./HomeMainFeatures";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import aboutimg from '../img/aboutimg.jpg';
import CustomCard from './CustomCard';
import {
  faThumbsUp,
  faFileAlt,
  faCalculator,
  faBoxes,
  faFile
} from "@fortawesome/free-solid-svg-icons";
import BusinessTypes from "./BusinessTypes";
import ProductFeatures from "./ProductFeatures";
import ExtraFeatures from "./ExtraFeatures";
import PricingCard from './PricingCard'
import ClientsSlider from "./ClientsSlider";
import Testimonial from './Testimonial'
import Reporting from "./Features/Reporting";
const Home = () => {

  return (
    <div>
      <HeaderHome />
      <HomeMainFeatures />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={6} >
              <div className="main-heading main-heading-left">
                <h1>
                Welcome to <br/><span>Jadeed</span> Munshi
                </h1>
                <div className="bottom-border">
                  <span className="blue"></span>
                  <span className="yellow"></span>
                </div>
              </div>
              <p>
                Our system refers to the place and time where a retail
                transaction is completed. It is the point at which a customer
                makes a payment in exchange for goods or services. The term
                "point of sale" can also refer to the technology and hardware
                used to facilitate this transaction.
              </p>
              <p>
                It is the point in a retail environment where a customer makes a
                payment for goods or services. The term "point of sale" can also
                refer to the hardware and software used to process transactions
                at that location .
              </p>
              <Button className="btn btn-primary">Contact Now</Button>
            </Col>
            <Col xs={12} sm={6} className="position-relative">
              <span className="aboutimg"><Image src={aboutimg}/></span>
              <span className="about">
                <h6>About Us</h6>
                <p>It refers to the location & transaction </p>
              </span>
              <span className="services">
                <span className="icon"><FontAwesomeIcon  icon={faThumbsUp} /></span>
                <p>Best Software </p>
                <h6>Services</h6>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
            <Row className="align-items-center">
              <div className="main-heading text-center">
                <h1>Master the Art of <span>Simplified Management</span></h1>
                <div className="bottom-border">
                  <span className="blue"></span>
                  <span className="yellow"></span>
                </div>
              </div>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <CustomCard
                  icon={faFileAlt}
                  title="Invoicing"
                  bodyContent="Generate and send quotes and invoices with a single click. Streamline receivable management in your accounting software"
                />
              </Col>
              <Col xs={12} sm={6} md={3}>
                <CustomCard
                  icon={faCalculator}
                  title="Accounting"
                  bodyContent="Automate accounting tasks effortlessly—over 90% of entries posted automatically, no expertise needed."
                />
              </Col>
              <Col xs={12} sm={6} md={3}>
                <CustomCard
                  icon={faBoxes}
                  title="Inventory"
                  bodyContent="Stay stocked with our Inventory Management solution. It tracks levels, signaling when and what to reorder, ensuring you never run out."
                />
              </Col>
              <Col xs={12} sm={6} md={3}>
                <CustomCard
                  icon={faFile}
                  title="Reporting"
                  bodyContent="Stay informed on your business's performance. Numerous reports provide insights, helping you understand your business's health."
                />
              </Col>
            </Row>
        </Container>
      </section>
      <section>
      <BusinessTypes/>
      </section>
      <section>
        <Container>
            <Row className="align-items-center">
              <div className="main-heading text-center">
                <h1>Product <span>Features</span></h1>
                <div className="bottom-border">
                  <span className="blue"></span>
                  <span className="yellow"></span>
                </div>
              </div>
            </Row>
        </Container>
        <ProductFeatures/>
        {/* <Features cards={cards} initialCardsToShow={6}/> */}
      </section>
      <section>
        <ExtraFeatures/>
      </section>
      <section className="pricing">
        <Container>
          <Row>
            <div className="main-heading main-heading-white text-center">
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
            <Col className='text-center'><h4 className='text-white'>For More Then Ten User</h4>
                <Button variant="light" className='mb-4'>Contact Us</Button>
            </Col>
        </Row>
        </Container>
      </section>
      <section>
        <Testimonial/>
      </section>
      <ClientsSlider/>
    </div>
  );
};

export default Home;
