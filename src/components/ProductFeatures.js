import React, { useState } from 'react';
import { Row, Container, Col, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductCard from './ProductCard';
import {
  faTachometerAlt,
  faMoneyCheckAlt,
  faMapMarkedAlt,
  faShippingFast,
  faFileAlt,
  faCalendarAlt,
  faFileInvoiceDollar,
  faPrint,
  faBarcode,
  faComputer,
  faMoneyBillAlt,
  faDollar,
  faRecordVinyl,
  faUsers,
  faBoxes,
  faChartBar,
  faIndustry
} from '@fortawesome/free-solid-svg-icons';

const ProductFeatures = () => {
  const initialCardsToShow = 6;
  const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardArray = [
    { icon: faTachometerAlt, 
      title: 'Dashboard', 
      content: "Effortlessly manage your business on the go with the Jadeed Munshi. Stay informed about your business anytime, anywhere. Utilize Jadeed Munshi' comprehensive reporting, including stock/inventory status and open orders, to stay in the loop about your business at all times. Take informed actions based on these insights to gain a clear understanding of your business's financial health. Having a centralized view of your business's financial status is crucial for establishing credibility in the market and ensuring a healthy operation." 
    },
    { icon: faMoneyCheckAlt, 
      title: 'Send Estimate & Quotations', 
      content: "Elevate your business professionalism with Accounts Software. Easily generate estimates and quotes, and effortlessly share detailed cost breakdowns and taxes with customers via WhatsApp and Email—all in just a few clicks. Impress your clients and build lasting relationships by presenting a polished and professional image. Start crafting estimates, quotations, and GST invoices seamlessly with this versatile software, designed for both mobile and desktop use." 
    },
    { icon: faMapMarkedAlt, 
      title: 'Track Orders', 
      content: "Efficiently manage your sales and purchase orders, seamlessly fulfill all transactions with the Sales Order Booking App, available on both mobile and web applications. This accounting software is designed to streamline your order processes, saving you valuable time and enabling you to concentrate on elevating your business to new heights. Embrace the ease of use and effectiveness of this software to effortlessly handle your business accounting tasks." 
    },
    { icon: faShippingFast, 
      title: 'Delivery Management', 
      content: "Effortlessly generate delivery challans and securely attach them to your consignments. Ensure product verification before dispatching to customers, guaranteeing the safe delivery of goods. Streamline returns by understanding accepted and rejected items. Easily convert delivery challans into invoices and share them seamlessly with customers and business partners through Jadeed Munshi. Simplify your overall business operations with this comprehensive accounting software. Converting delivery challans to invoices is just one step in the process!" 
    },
    { icon: faFileAlt, 
      title: 'Recurring Invoices', 
    content: "Eliminate the need to recreate invoices every month. With Jadeed Munshi, schedule invoices to recur at various frequencies, such as daily, weekly, or monthly. The system automatically generates a new sale invoice at the designated intervals, complete with specific statuses and dates. This seamless feature not only saves time but also ensures accurate inventory updates in line with the generated invoices. Streamline your invoicing process with automated recurring invoices using Jadeed Munshi." 
  },
    { icon: faComputer, 
      title: 'Point of Sales', 
    content: "Elevate your business with our Online POS Software featuring FBR Integration, Advanced Inventory Control, Intuitive Shortcut Keys, and Customizable Loyalty Programs for seamless sales and enhanced customer engagement. Monitor product availability in real-time, saving valuable time. The POS seamlessly integrates with Splendid eCommerce, allowing for a hassle-free multi-channel business experience without the need for separate stock setups. Boost efficiency and enjoy a headache-free, unified approach to managing your business across different channels." 
  },
    { icon: faFileInvoiceDollar, 
      title: 'Receivables and Payable', 
    content: "Effortlessly maintain a complete cashbook with Jadeed Munshi. Track both receivables and payables effortlessly to stay on top of the total money 'to receive' and 'to pay'. With just a click, identify outstanding payments, as your Ledger account book is automatically generated from entered transactions. Try Jadeed Munshi to expedite your business growth!" 
  },
    { icon: faCalendarAlt, 
      title: 'Banking Activities', 
    content: "Effortlessly add, manage, and track payments to your bank accounts with Jadeed Munshi software. Streamline cash flow by managing all cash-in and cash-out transactions in one centralized platform. Ensure control over your business finances by easily reconciling your bank statement with the maintained bank account in Jadeed Munshi. The software accommodates 'Cheque' payments, allowing you to track them until deposit. Keep tabs on open cheques, conveniently closing them all together upon deposit. Jadeed Munshi empowers you to stay in command of your business finances." 
  },
    { icon: faRecordVinyl, 
      title: 'Record Expenses', 
    content: "Ensure effective financial tracking for your business with this accounting software. Keep a close eye on business-related purchases to streamline tax filing processes. Record and track expenses in real-time, making it the ideal tool for comprehensive financial management. This accounting software not only allows you to monitor all money spent but also facilitates the generation of detailed reports. By leveraging this software, you can optimize your business expenditure, resulting in cost savings. Additionally, the streamlined expense recording process will save you significant time during tax filing." 
  },
    { icon: faDollar, 
      title: 'Other Collections and Payments', 
    content: "Jadeed Munshi facilitates seamless financial transactions by allowing users to receive and make payments, excluding customers/vendors, through the addition of contacts as 'other contacts.' This feature streamlines the payment process and enhances overall financial management."
  },
    { icon: faBoxes, 
      title: 'Inventory Management', 
    content: "Transferring products from one location to another is effortlessly simplified, ensuring that your inventory position remains consistently updated." 
  },
    { icon: faIndustry, 
      title: 'Lite Manufacturing module', 
    content: "Jadeed Munshi offers a comprehensive suite for product manufacturing, enabling easy assembly or disassembly of products. Create job orders for assembling products in the industry by defining them as product assemblies. Input products serve as raw materials for manufacturing assembled products, increasing inventory accordingly. Output products are generated in the assembly process. Disassembling, the reverse process, involves taking assembled products as raw materials. The inventory for disassembling increases with the output of disassembled products, and further by-products are produced in the disassembly process. This ensures efficient management of manufacturing processes in the industry." 
  },
    { icon: faFileAlt, 
      title: 'Batch and Expiry Management', 
    content: "Effectively manage your inventory by incorporating manufacturing and expiry dates into your system for enhanced control. Jadeed Munshi provides a Batch Management feature, allowing you to maintain stock on a batch-wise basis. You can mark a product as a batch product and add multiple batches with their respective expiry dates. The software offers reports listing all batches set to expire soon, giving you valuable insights into your inventory stock based on the expiry date of each product. This feature ensures a proactive approach to managing inventory and minimizing potential issues related to expired products." 
  },
    { icon: faUsers, 
      title: 'Sales Geography and Sales Team', 
    content: "Jadeed Munshi enables you to record sales based on sales geography, associating them with specific customers and salespeople. This feature allows salespersons to access and record orders for a particular area and specific customers, streamlining the sales process and enhancing efficiency." 
  },
    { icon: faBarcode, 
      title: 'Barcode Designer and Printing', 
    content: "The system allows printing of barcodes directly from both the Purchase transaction and the POS module. Users can specify the number of stickers to be printed for a particular product, facilitating efficient barcode generation for inventory management." 
  },
    { icon: faPrint, 
      title: 'Regular/Thermal Printer', 
    content: "Print bills and invoices in a polished and professional format with Jadeed Munshi, the top-notch accounting software. Whether you have a regular printer, thermal printer, or barcode printer, Jadeed Munshi supports all types. The billing software is versatile, allowing you to generate prints in various sizes such as A4, A5, thermal print sizes, and more. Simply connect your thermal or regular printer, and effortlessly produce professional invoices using this user-friendly invoicing software." 
  },
    { icon: faChartBar, 
      title: 'Business Reports', 
    content: "Access crucial data tailored to your needs. For instance, 'Profit & Loss' reports guide you on strategic investments and areas to cut costs. Utilize the 'Balance Sheet' to enhance operational efficiency, refine borrowing practices, and boost overall financial health. Obtain a detailed analysis of ledger accounts, business details, and a comprehensive overview of profits and other business statuses with this powerful accounting software."
   },
    { icon: faMoneyBillAlt, 
      title: 'Track Cash Flow', 
    content: "Capture diverse business transactions in Jadeed Munshi to ensure accuracy and prevent miscounts. Consolidate all cash transactions, including bank withdrawals and deposits, within a single platform. Utilize the Jadeed Munshi software to effectively track your business's cash flow. Leverage the Daily Summary Report for a comprehensive overview of your financial transactions. Simplify your record-keeping and minimize the risk of miscounting with the powerful features of Jadeed Munshi." 
  },
    // Add more objects as needed
  ];


  const handleLoadMore = () => {
    setCardsToShow(cardsToShow + initialCardsToShow);
  };

  const handleShowLess = () => {
    setCardsToShow(initialCardsToShow);
  };

  const handleReadMore = (index) => {
    setSelectedCard(cardArray[index]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <Row>
          {cardArray.slice(0, cardsToShow).map((card, index) => (
            <Col xs={12} sm={6} md={4} className='mb-3' key={index}>
              <ProductCard
                icon={card.icon}
                title={card.title}
                bodyContent={card.content}
                onReadMore={() => handleReadMore(index)}
              />
            </Col>
          ))}
        </Row>
        {cardsToShow < cardArray.length ? (
          <div className='text-center mt-3'>
            <Button variant='primary' onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        ) : (
          <div className='text-center mt-3'>
            <Button variant='secondary' onClick={handleShowLess}>
              See Less
            </Button>
          </div>
        )}

        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCard && selectedCard.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCard && (
              <>
                <FontAwesomeIcon icon={selectedCard.icon} size="3x" className="mb-2" />
                <p>{selectedCard.content}</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};


export default ProductFeatures;
