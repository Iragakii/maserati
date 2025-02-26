import React, { useState } from 'react'
import Header from './Header'
import Eb from './bestcar/Eb'
import { Canvas } from '@react-three/fiber'
import Ec from './bestcar/Ec'
import Ed from './bestcar/Ed'

const Best = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <Eb />,
    <Ec />,
    <Ed />
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Header />
      <div className="slider-container" style={sliderContainerStyle}>
        <Canvas 
          shadows 
          camera={{ position: [0, 0, 0], fov: 20 }}
          style={canvasStyle}
        >
          {slides[currentSlide]}
        </Canvas>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          style={navButtonStyle}
          className="prev-button"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          style={navButtonStyle}
          className="next-button"
        >
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div style={dotsContainerStyle}>
          {slides.map((_, index) => (
            <span
              key={index}
              style={{
                ...dotStyle,
                backgroundColor: currentSlide === index ? '#333' : '#ccc'
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// Basic styles
const sliderContainerStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '1600px',
  margin: '0 auto',
  overflow: 'hidden'
};

const canvasStyle = {
  width: '100%',
  height: '900px' // Adjust height as needed
};

const navButtonStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '24px',
  zIndex: 10
};

const dotsContainerStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '10px'
};

const dotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
};


export default Best;