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

const Purchases = () => {
  // Define an array of card data
  const cardData = [
    {
      icon: faFileAlt,
      title: 'Order',
      bodyContent: 'Send a claiming order to your vendor for products/services, specifying delivery schedules & pricing.',
      linkText: 'View Report',
    },
    {
      icon: faCalculator,
      title: 'Good Receiving',
      bodyContent: 'Record goods received notifications for accurate inventory management and product availability for sales.',
      linkText: 'View Report',
    },
    {
      icon: faFileAlt,
      title: 'Purchase Invoice',
      bodyContent: 'Record purchase invoices, set payment due dates, and document taxes and discounts as specified.',
      linkText: 'View Report',
    },
    {
      icon: faCalculator,
      title: 'Purchase Return',
      bodyContent: 'Record supplier returns for automatic updates to inventory and payables, ensuring accuracy.',
      linkText: 'View Report',
    },
    {
      icon: faFileAlt,
      title: 'Vendor Refund',
      bodyContent: "Issues vendor refunds, allowing grant to unassigned funds or specific invoices, returns, or payments.",
      linkText: 'View Report',
    },
    {
      icon: faCalculator,
      title: 'Make Payment',
      bodyContent: 'Pay vendors via bank transactions or cash to settle invoices, ensuring timely and accurate payable updates.',
      linkText: 'View Report',
    },
  ];
  // salesReports Data
  const purchasesReportsData  = [
    {
      icon: faFileAlt,
      title: 'Aged Account Payable Report',
      bodyContent: 'Catalog of outstanding vendor invoices categorized by vendor type.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Vendor Ledger',
      bodyContent: 'The report outlines vendor transactions in a specified date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Vendor Balances Report',
      bodyContent: 'Inventory of balances for each vendor categorized by vendor types.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Purchase Invoice Report',
      bodyContent: 'Display all business purchases associated with each vendor.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Vendor Payment Report',
      bodyContent: "Display payments for a chosen date range tied to purchase invoices, filtered by vendor, regardless of allocation status.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Vendor Refund Report',
      bodyContent: "Show vendor refunds in a specified date range, regardless of allocation status, linked to invoices, returns, or payments.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Product Purchases Report',
      bodyContent: "Offers a list of all product purchases categorized by product category, along with the corresponding average cost of each product.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Good Receiving Report',
      bodyContent: 'This report furnishes details on products received at a specific location from vendors within a designated date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Purchase Return Report',
      bodyContent: 'Summarize product/service returns with purchase return details within a specified date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Purchase Invoice Detail Report',
      bodyContent: 'Summarizes detailed information from all product/service invoices, offering a comprehensive overview.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Purchase Order Detail Report',
      bodyContent: 'Provide a thorough summary of all product/service orders, including detailed information for each order.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Purchase Order Report',
      bodyContent: 'The report displays business purchase orders in the chosen period for all vendors or a specific one.',
      linkText: 'View Report',
      linkUrl: report,
    },
  ];

  return (
    <>
      <Header title="Purchases" />
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
            <h1>Purchase <span>Reports</span></h1>
            <div className="bottom-border">
              <span className="blue"></span>
              <span className="yellow"></span>
            </div>
          </div>
        </Row>
      </Container>
        <Container>
          <Row className='justify-content-center'>
            {purchasesReportsData.map((card, index) => (
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

export default Purchases;
