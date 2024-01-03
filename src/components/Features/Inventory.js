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

const Inventory = () => {
  // Define an array of card data
  const cardData = [
    {
      icon: faFileAlt,
      title: 'Stock Movement',
      bodyContent: 'Transfer items between locations easily to keep your inventory status current.',
    },
    {
      icon: faCalculator,
      title: 'Stock Adjustment',
      bodyContent: 'Streamline tracking for lost, stolen, or expired items in our inventory solution.',
    },
    {
      icon: faThumbsUp,
      title: 'Batch Management',
      bodyContent: 'Optimize inventory control by sorting products based on manufacturing and expiry dates in your system.',
    },
    {
      icon: faBoxes,
      title: 'Multiple Packaging',
      bodyContent: 'Optimize inventory with versatile packaging—purchase in bulk, sell in diverse units.',
    },
    {
      icon: faFile,
      title: 'Custom Attributes',
      bodyContent: 'Customize product attributes for streamlined inventory management and reporting.',
    },
    {
      icon: faFile,
      title: 'Import/Export products',
      bodyContent: 'Simplify product import/export in your online inventory with a single click.',
    },
  ];
  // salesReports Data
  const salesReportsData  = [
    {
      icon: faFileAlt,
      title: 'Stock Tracking Report',
      bodyContent: 'Generate a detailed product list with opening balances, inflows, outflows, and closing balances, filtered by date range and product category.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Low Inventory Report',
      bodyContent: 'Compile a list of products below defined minimum stock levels, identifying items needing attention due to low stock.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Product Ledger',
      bodyContent: 'Generate a detailed report listing all transactional activities for each product within a specified date range for each warehouse.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Stock Adjustment',
      bodyContent: "List all relevant transactions for products requiring change, including instances of destruction, loss, or opening balances.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Stock On Hand Report',
      bodyContent: "A product summary pertains to a business that offers an overview of the available stock for various items.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Stock On Hand (With Value)',
      bodyContent: "A product summary provides detailed insights into current stock levels and item details for a business.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Stock Movement',
      bodyContent: 'A summary of products pertains to a warehouse that has been relocated from one location to another.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Short Expiry Stock',
      bodyContent: 'Displays soon-to-expire batches in inventory, taking into account the expiration date of each product.',
      linkText: 'View Report',
      linkUrl: report,
    },
  ];

  return (
    <>
      <Header title="Inventory" />
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
            <h1>Inventory <span>Reports</span></h1>
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

export default Inventory;
