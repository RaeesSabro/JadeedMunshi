import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import Header from '../InnerHeader';
import report from '../../salesReports/Sales-Order-Detail-Report.pdf';
import CustomCard from '../CustomCard';
import {
  faThumbsUp,
  faFileAlt,
  faCalculator,
  faBoxes,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

const Manufacturing = () => {
  // Define an array of card data
  const cardData = [
    {
      icon: faFileAlt,
      title: 'Assembling',
      bodyContent: 'It involves creating unique products by assembling inputs, including expenses for the final output.',
    },
    {
      icon: faCalculator,
      title: 'Disassembling',
      bodyContent: 'Disassembling breaks down products into components, with associated expenses impacting the final result.',
    },
  ];
  // salesReports Data
  const salesReportsData  = [
    {
      icon: faFileAlt,
      title: 'Material Issuance',
      bodyContent: 'Displays a comprehensive list of all materials issued for the manufacturing of products.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Job Order Expense',
      bodyContent: 'Enumerates all expenses associated with a specific job order within a designated date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Job Order Production',
      bodyContent: 'Displays production details corresponding to a job order within a designated date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
  ];

  return (
    <>
      <Header title="Manufacturing" />
      <section>
        <Container>
          <Row className='justify-content-center'>
            {cardData.map((card, index) => (
              <Col key={index} xs={12} sm={6} md={3} className="mb-3">
                <CustomCard icon={card.icon} title={card.title} bodyContent={card.bodyContent} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* salesReportsData */}
      <section>
      <Container>
        <Row>
          <div className="main-heading text-center">
            <h1>Manufacturing <span>Reports</span></h1>
            <div className="bottom-border">
              <span className="blue"></span>
              <span className="yellow"></span>
            </div>
          </div>
        </Row>
      </Container>
        <Container>
          <Row className='justify-content-center'>
            {salesReportsData.map((card, index) => (
              <Col key={index} xs={12} sm={6} md={3} className="mb-3">
                <CustomCard
                  icon={card.icon}
                  title={card.title}
                  bodyContent={card.bodyContent}
                  linkText={card.linkText}
                  linkUrl={card.linkUrl}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Manufacturing;
