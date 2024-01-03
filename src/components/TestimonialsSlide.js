import React, { useState, useEffect } from 'react';
import { Card, Image, Button, Row, Col  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import aboutimg from '../img/aboutimg.jpg';

const TestimonialsSlide = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      thumb: aboutimg, // Use the image source here
    },
    {
      id: 2,
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jane Smith',
      thumb: aboutimg, // Use the image source here
    },
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      thumb: aboutimg, // Use the image source here
    },
    {
      id: 2,
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jane Smith',
      thumb: aboutimg, // Use the image source here
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-scroll to the next testimonial
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change the interval (in milliseconds) as needed

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(interval);
    };
  }, [testimonials.length]);

  return (
    <div className="testimonials-slide">
      <Card className='testimonial'>
        <Card.Body>
          <h1><FontAwesomeIcon icon={faQuoteLeft} /></h1>
          <p>{testimonials[currentTestimonial].text}</p>
          <div className='author-section'>
            <Image className='author-thumbnail' src={testimonials[currentTestimonial].thumb} roundedCircle alt="thumb" />
            <p>{testimonials[currentTestimonial].author}</p>
          </div>
        </Card.Body>
      </Card>
      <div className="controls">
        <Button  variant="primary" onClick={prevTestimonial}><FontAwesomeIcon icon={faAngleLeft} /></Button >
        <Button  variant="primary" onClick={nextTestimonial}><FontAwesomeIcon icon={faAngleRight} /></Button >
      </div>
    </div>
  );
};

export default TestimonialsSlide;
