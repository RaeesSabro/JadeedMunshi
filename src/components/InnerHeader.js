import React from 'react';
import { Container, Image } from 'react-bootstrap';

const InnerHeader = ({ title, tagline, content, img }) => {
  return (
    <section className="innerHeader">
      <Container fluid>
        <h1>{title}</h1>
        <h4>{tagline}</h4>
        <p>{content}</p>
      </Container>
    </section>
    // <header>
    //   <section className="overlay-container" style={{
    //     backgroundImage: `url('https://img.freepik.com/free-photo/focused-african-american-cashier-scanning-goods-checkout_74855-3409.jpg?w=740&t=st=1704187190~exp=1704187790~hmac=56c01cd9404b27793290769c3dac8f62ad3ccdd89d1b7270a3059c37d5e4fc59')`,
    //   }}>
    //     <Container fluid >
    //       <h1>{title}</h1>
    //       <h4>{tagline}</h4>
    //       <p>{content}</p>
    //     </Container>
    //   </section>
    // </header>
  );
};

export default InnerHeader;
