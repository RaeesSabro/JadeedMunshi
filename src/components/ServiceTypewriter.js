import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const ServiceTypewriter = () => {
    const [text] =  useTypewriter({
        words:['Point of sale', 'Inventory Control', 'Cash Register', 'Customers', 'Online Catalog', ''],
        loop: 0,
        typeSpeed:150,
        deleteSpeed:150,
      });
    return (
    <div className='typetext'>
      <h1>
        {text}
        <span>
          <Cursor/>
        </span>
      </h1>
    </div>
  )
}

export default ServiceTypewriter
