import React from "react";
import { Container, Image, Card, Row, Col } from "react-bootstrap";
import multiUser from '../img/multiUser.jpg';
import multiCurrency from '../img/multiCurrency.jpg';
import safeSecure from '../img/safeSecure.jpg';
import dailyBackup from '../img/dailyBackup.jpg';
const ExtraFeatures = () => {
  // Sample card data array
  const cardData = [
    {
      title: "Multi User",
      description: "Optimize business management with Splendid Accounts app. Get real-time updates, comprehensive reports, and enhance financial health. Centralized view for market credibility and operational success.",
      thumb: multiUser,
    },
    {
      title: "Multi Currency",
      description: "Effortlessly create professional estimates and quotes with our Accounts Software. Share detailed breakdowns and taxes instantly via WhatsApp and Email. Enhance your business image, foster customer loyalty, and seamlessly generate GST invoices on mobile and desktop platforms.",
      thumb: multiCurrency,
    },
    {
      title: "Safe & Secure",
      description: "Keep abreast of your business's performance. Utilize a variety of reports that offer valuable insights, enabling a deeper understanding of your business's overall health.",
      thumb: safeSecure,
    },
    {
      title: "Daily Backup",
      description: "Effortlessly generate estimates and quotes with our Accounts Software. Share detailed cost breakdowns and taxes instantly via WhatsApp and Email in a few clicks. Enhance professionalism, foster customer loyalty, and create seamless estimates, quotations, and GST invoices on mobile and desktop platforms.",
      thumb: dailyBackup,
    },
    // Add more card data as needed
  ];
  const thumbnailStyle = {
    padding: '0.35rem',
    borderRadius: '30px',
    maxWidth: '70%',
    marginBottom: '10px'
  };
  const contentStyle = {
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    alignSelf: 'stretch',
    display: '-webkit-box',
    overflow: 'hidden',
    marginBottom: '0px'
  };
  return (
    <>
      <Container className="text-center">
        <Row>
          {cardData.map((card, index) => (
            <Col xs={12} sm={6} md={3}>
              <div key={index} className="extra-features">
                  <Image src={card.thumb} alt={card.title} style={thumbnailStyle} thumbnail />
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text style={contentStyle}>{card.description}</Card.Text>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ExtraFeatures;
