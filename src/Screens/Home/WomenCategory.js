import React, { useState } from 'react';
import w1 from '../../Assets/Images/catw1.png';
import w2 from '../../Assets/Images/catw2.png';
import w3 from '../../Assets/Images/catw3.png';
import w4 from '../../Assets/Images/catw4.png';
import w5 from '../../Assets/Images/catw5.png';
import w6 from '../../Assets/Images/catw6.png';

const images = [
  { src: w1, name: "BAGS" },
  { src: w2, name: "DRESSES" },
  { src: w3, name: "HOODIES" },
  { src: w4, name: "JEWELLERY" },
  { src: w5, name: "FOOT WEAR" },
  { src: w6, name: "PERFUMES" }
];

export default function MenCategory() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.grid}>
      {images.map((image, index) => (
        <div
          style={{ ...styles.imageContainer, maxWidth: '172px' }}
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img src={image.src} alt={image.name} style={styles.image} />
          {hoverIndex === index && (
            <div style={styles.overlay}>
              <span style={styles.text}>{image.name}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1.5vw',
    padding: '1.3vw',
    maxWidth: '100vw',
    margin: '5vh 0',
  },
  imageContainer: {
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: '50%',
    width: '100%',
    height: 'auto',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: '1rem', 
  },
};
