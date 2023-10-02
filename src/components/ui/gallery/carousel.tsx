// Carousel.tsx
import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  items: JSX.Element[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <ResponsiveCarousel>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
