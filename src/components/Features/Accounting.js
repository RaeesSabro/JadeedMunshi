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

const Accounting = () => {
  // Define an array of card data
  const cardData = [
    {
      icon: faFileAlt,
      title: 'Expense',
      bodyContent: 'Effortlessly manage expenses by logging, tracking, and linking transactions to vendor profiles.',
    },
    {
      icon: faCalculator,
      title: 'Journal Generals',
      bodyContent: 'Accountants & business owners input opening balances & make adjustments through journal entries.',
    },
    {
      icon: faThumbsUp,
      title: 'Chart of Account',
      bodyContent: 'Efficiently set up your business with a pre-established chart of accounts and the option to add as needed.',
    },
    {
      icon: faBoxes,
      title: 'Debit Note',
      bodyContent: 'Generate a debit note to adjust supplier payment for discounts, damages, refunds, or returns.',
    },
    {
      icon: faFile,
      title: 'Credit Notes',
      bodyContent: 'Generate a credit note to offset customer payments in cases of discounts, damages, or sales returns.',
    },
    {
      icon: faFile,
      title: 'Bank Accounts',
      bodyContent: 'Manage and oversee all bank accounts for handling customer payments and vendor transactions.',
    },
    {
      icon: faFile,
      title: 'Bank Deposit',
      bodyContent: 'Depositing cash, checks, & documents into your bank account is now simpler with a unified interface.',
    },
    {
      icon: faFile,
      title: 'Funds Transfer',
      bodyContent: 'Use the fund transfer feature in splendid accounts for easy inter-account fund transfers.',
    },
  ];
  // salesReports Data
  const salesReportsData  = [
    {
      icon: faFileAlt,
      title: 'Balance Sheet',
      bodyContent: 'A summary detailing the assets, liabilities, and capital of a business at the chosen date..',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Profit and Loss',
      bodyContent: 'It summarizes earnings, expenditures, and costs incurred during a specified period.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Audit Log',
      bodyContent: 'Monitored the records of actions executed by any user across the entire system.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Account Ledger',
      bodyContent: "A ledger organizes a company's transactions by individual ledger accounts.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Expense Report',
      bodyContent: "Show expenditures by cash or accounts within a set date range.",
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Credit Note Report',
      bodyContent: 'Generate credit notes for specified date range and customer/vendor.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Debit Note Report',
      bodyContent: 'Generate debit notes for specified date range and customer/vendor.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Trial Balance',
      bodyContent: 'Lists accounts in a business ledger with either a debit or credit balance.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Consolidated Ledger',
      bodyContent: 'Display consolidated transactions for a contact registered as both a customer and vendor.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Transaction List Report',
      bodyContent: 'Provide detailed information for a single transaction as a journal entry in the system.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Tax Collected on Sales Report',
      bodyContent: 'Display taxes collected from customers for product sales within a specified date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faFileAlt,
      title: 'Tax Paid on Purchases Report',
      bodyContent: 'Display taxes remitted to vendors for product purchases within a specified date range.',
      linkText: 'View Report',
      linkUrl: report,
    },
    {
      icon: faCalculator,
      title: 'Serial Product Management',
      bodyContent: 'Maintain an organized post-sale inventory tracking system with serial number management.',
      linkText: 'View Report',
      linkUrl: report,
    },
  ];

  return (
    <>
      <Header title="Accounting" />
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
            <h1>Accounting <span>Reports</span></h1>
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

export default Accounting;
