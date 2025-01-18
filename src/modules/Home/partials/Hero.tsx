'use client';

import { icons } from '@libs/Icons';
import styles from '../../../shared/styles/home.module.css';
import { home_data } from '../config/constants';
import Button from '@components/Button';
import { useState, useEffect } from 'react';

const Hero = () => {
  

  const images = ['/home1.png', '/home3.jpg', '/home2.jpg'];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="hero"
      className={`relative h-[70vh] lg:h-screen max-h-[1080px] ${styles.hero_image}`}
      style={{
        backgroundImage: `url(${images[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      {/* Hero content */}
      <div className="relative z-10 flex  justify-between items-center h-full px-6 lg:px-20 mx-10 text-white">
        <div>
        <h1 className="text-7xl  font-primary  mb-4">Jade Reforestry</h1>
        <p className="text-3xl font-primary max-w-lg mb-6">
          Vergroening in harmonie met natuur en landbouw.
        </p>
        </div>
        <div>
          <p className="text-sm lg:text-base font-light font-primary max-w-xl mb-8">
          Bij Jade Reforestry geloven we in een toekomst waar landbouw en
          natuur samen floreren. Met onze praktische groene oplossingen maken
          we dit werkelijkheid.
        </p>
        <Button className=" inline-flex bg-white px-6 py-3 rounded-md gap-9">
          <span className='text-black font-primary font-normal'>Doe met ons mee</span>
          
          <span className='text-primary text-xs '>{icons.rightArrow}</span>
        </Button>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-blue-200' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
