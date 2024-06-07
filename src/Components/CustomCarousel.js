import React, { useState } from 'react';
import '../Screens/Home/customCarouselStyles.css'

const CustomCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? children.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === children.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="my-custom-carousel">
      <button className="control-arrow control-prev" onClick={goToPrev}></button>
      <div className="carousel">
        <div className="slide">
          {React.Children.toArray(children)[currentIndex]}
        </div>
      </div>
      <button className="control-arrow control-next" onClick={goToNext}></button>
    </div>
  );
};

export default CustomCarousel;
