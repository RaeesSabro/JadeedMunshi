import { Row, Col, Container, Card, Image } from "react-bootstrap";
import Header from "./InnerHeader";
import cityCollege from "../img/clients/cityCollege.png";
import punjabPolice from "../img/clients/punjabPolice.png";
import traficPolice from "../img/clients/traficPolice.png";
import traficPoliceMultan from "../img/clients/traficPoliceMultan.png";
import khidmatcenter from "../img/clients/khidmatcenter.png";

const clientImages = [cityCollege, punjabPolice, traficPolice, traficPoliceMultan, khidmatcenter];

function Clients() {
  return (
    <>
      <Header title="Clients" />
      <section className="clients">
        <Container>
            <Row>
            <div className="main-heading text-center">
                <h1>Our Valuable <span>Clients</span></h1>
                <div className="bottom-border">
                <span className="blue"></span>
                <span className="yellow"></span>
                </div>
            </div>
            </Row>
            <Row className="justify-content-center">
                {clientImages.map((image, index) => (
                <Col key={index} xs={6} md={3} className="mt-4">
                    <Card>
                    <Card.Body className="text-center">
                        <Image src={image} fluid />
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
          </Container>
      </section>
    </>
  );
}

export default Clients;
