import React, { useState } from 'react';
import m1 from '../../Assets/Images/catm1.png';
import m2 from '../../Assets/Images/catm2.png';
import m3 from '../../Assets/Images/catm3.png';
import m4 from '../../Assets/Images/catm4.png';
import m5 from '../../Assets/Images/catm5.png';
import m6 from '../../Assets/Images/catm6.png';

const images = [
  { src: m1, name: "GLASSES" },
  { src: m2, name: "T-SHIRT" },
  { src: m3, name: "WRIST WATCH" },
  { src: m4, name: "JEANS" },
  { src: m5, name: "SMART WATCH" },
  { src: m6, name: "SHOES" }
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
    padding: '1.5vw',
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
