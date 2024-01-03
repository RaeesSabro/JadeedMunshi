import React from 'react'
import CustomCard from './CustomCard';
import {Row, Container, Col } from "react-bootstrap";
import {
  faBookOpen,
  faCashRegister,
  faUsers,
  faBoxes,
  faComputer
} from "@fortawesome/free-solid-svg-icons";
const HomeMainFeatures = () => {
  return (
    <div>
        <Container className='homeMainFeatures'>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={2}>
              <CustomCard
                icon={faComputer}
                title="POS System"
              />
            </Col>
            <Col xs={12} sm={2}>
              <CustomCard
                icon={faBoxes}
                title="Inventory Control"
              />
            </Col>
            <Col xs={12} sm={2}>
              <CustomCard
                icon={faCashRegister}
                title="Cash Register"
              />
            </Col>
            <Col xs={12} sm={2}>
              <CustomCard
                icon={faUsers}
                title="Customers"
              />
            </Col>
            <Col xs={12} sm={2}>
              <CustomCard
                icon={faBookOpen}
                title="Online Catalog"
              />
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default HomeMainFeatures
