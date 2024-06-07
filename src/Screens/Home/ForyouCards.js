import React from 'react';
import Rating from '../../Components/Rating';

const ForyouCard = ({ imageUrl, label, price, rating }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt="Product" style={styles.image} />
      <div style={styles.content}>
        <div style={styles.text}>
          <span style={styles.label}>{label}</span>
          <span style={styles.price}>{price}</span>
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

const styles = {
  card: {
    cursor:'pointer',
    display: 'flex',
    flexDirection: 'column',
    width: '21.1vw', 
    height: '30vw', 
        '@media (max-width: 768px)': {
      width: '50vw', 
      height: '60vw', },
    '@media (max-width: 480px)': {
      width: '80vw', // Adjust for mobile
      height: '120vw', // Adjust for mobile
    },
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    '@media (max-width: 768px)': {
      height: 'auto', // Adjust for tablets
    },
  },
  content: {
    padding: '10px',
    height: '30%', // Define content area height
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column', // Stack content vertically on tablets
      height: 'auto', // Adjust for flexible content area
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1vw', 
    '@media (max-width: 768px)': {
      gap: '2vw', 
    },
    '@media (max-width: 480px)': {
      gap: '4vw',
    },
  },
  label: {
    fontSize: '1.1vw', 
    fontWeight: '400', // Adjust font weight as needed
    '@media (max-width: 768px)': {
      fontSize: '2.2vw', // Adjust font size for tablets
    },
    '@media (max-width: 480px)': {
      fontSize: '4.4vw', // Adjust font size for mobile
    },
  },
  price: {
    fontSize: '1vw', // Adjust font size as needed
    fontWeight: '400', // Adjust font weight as needed
    '@media (max-width: 768px)': {
      fontSize: '2vw', // Adjust font size for tablets
    },
    '@media (max-width: 480px)': {
      fontSize: '4vw', // Adjust font size for mobile
    },
  }
}

export default ForyouCard;
