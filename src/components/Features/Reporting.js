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

const Reporting = () => {
  // Define an array of card data
  const cardData = [
    {
      icon: faFileAlt,
      title: 'Quotations',
      bodyContent: 'Effortlessly send inspiring quotes via email to engage with clients or leads swiftly, boosting sales success.',
    },
    {
      icon: faCalculator,
      title: 'Order',
      bodyContent: 'Avoid delivery delays by streamlining order and delivery management for improved control & efficiency.',
    },
    {
      icon: faThumbsUp,
      title: 'Deliveries',
      bodyContent: 'Timely delivery is crucial for success, fostering customer satisfaction, loyalty, and a reliable brand.',
    },
    {
      icon: faBoxes,
      title: 'Invoice',
      bodyContent: 'Generating an aesthetically pleasing and professionally crafted invoice is a breeze with Jadeed Munshi.',
    },
    {
      icon: faFile,
      title: 'Sales Return',
      bodyContent: 'Effortlessly process customer sales returns to ensure your inventory and receivables stay current & accurate.',
    },
    {
      icon: faFile,
      title: 'Customer Refund',
      bodyContent: 'Effortlessly apply refunds, whether allocated or unallocated, for precise financial records.',
    },
    {
      icon: faFile,
      title: 'Receive Money',
      bodyContent: 'Accept various payment methods, including cash, cheque, and bank drafts, for settling invoices.',
    },
    {
      icon: faFile,
      title: 'Sales Tax Ready',
      bodyContent: 'Trust our software for accurate, seamless sales tax calculations, ensuring peace of mind.',
    },
  ];
  // salesReports Data
  const salesReportsData  = [
    {
      icon: faFileAlt,
      title: 'Product Wise Profit Report',
      bodyContent: 'Shows profit from sold products within a specified date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Aged Account Receivable',
      bodyContent: 'Catalog of outstanding customer invoices by customer type.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Customer Ledger',
      bodyContent: 'The report displays customer transactions in a specified date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Customer Balances Report',
      bodyContent: 'Summarized customer balances categorized by classifications.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Sale Invoice Report',
      bodyContent: "The Invoice Summary lists specified timeframe invoices, aiding sales performance evaluation.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Receive Money Report',
      bodyContent: 'Displays funds, allocated or not, linked to any invoice, with customer filtering in a specified date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Customer Refund Report',
      bodyContent: 'Specifies customer refunds linked to invoices, returns, or payments, with refining for a designated date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Product Sales Report',
      bodyContent: 'Details sales deliveries, specifying product quantities for quick transfer order generation.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Sale Delivery Report',
      bodyContent: 'Offers detailed sales delivery lists with transfer quantities, enabling swift order initiation.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Sale Return Report',
      bodyContent: 'Details returned products or services with associated information in the specified date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Sale Return Detail Report',
      bodyContent: 'This report comprehensively outlines product/service sales returns, including details for each return.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Sale Invoice Detail Report',
      bodyContent: 'A detailed summary of all invoices, including associated product/service details.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Product Sale Customer Wise',
      bodyContent: 'This report outlines the past sales of a particular product within a defined date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Sale Order Detail Report',
      bodyContent: 'This report outlines sales orders and associated products/services within the given date range',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Sale Order Report',
      bodyContent: 'The Order Summary lists all orders in the chosen timeframe, facilitating pre-order booking analysis.',
      linkText: 'View Report',
      linkUrl: report,
    },
  ];

  return (
    <>
      <Header title="Reporting" />
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
            <h1>Sales <span>Reports</span></h1>
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

export default Reporting;
