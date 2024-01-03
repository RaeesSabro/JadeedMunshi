import React from "react";
import { Row, Container, Image } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import khidmatcenter from "../img/clients/khidmatcenter.png";
import punjabPolice from "../img/clients/punjabPolice.png";
import traficPolice from "../img/clients/traficPolice.png";
import traficPoliceMultan from "../img/clients/traficPoliceMultan.png";
import cityCollege from "../img/clients/cityCollege.png";

const ClientCarousel = () => {
  const clientImages = [
    khidmatcenter,
    punjabPolice,
    traficPolice,
    traficPoliceMultan,
    cityCollege,
    punjabPolice,
    traficPolice,
    traficPoliceMultan,
  ];

  const slickSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section>
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
        <Slider className="customer-logos" {...slickSettings}>
          {clientImages.map((image, index) => (
            <div key={index} className="slide">
              <Image src={image} thumbnail />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default ClientCarousel;
