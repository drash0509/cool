import React, { useState } from 'react';
import emptyStar from '../Assets/Images/Star.png';
import filledStar from '../Assets/Images/Star_f.png';

function CustomRating() {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <img 
            key={index}
            src={index <= rating ? filledStar : emptyStar}
            onClick={() => handleRating(index)}
            alt="star"
            style={{ cursor: 'pointer' }}
          />
        );
      })}
    </div>
  );
}

export default CustomRating;
