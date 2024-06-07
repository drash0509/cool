import React from 'react';
import sm1 from '../../Assets/Images/SM1.png';
import sm2 from '../../Assets/Images/SM2.png';
import sm3 from '../../Assets/Images/SM3.png';
import sm4 from '../../Assets/Images/SM4.png';
import iconImage from '../../Assets/Images/heart.png';
import insta from '../../Assets/Images/instagram.png'

export default function Socialmedia() {
  return (
    <div style={styles.container}>
      <div style={styles.leftcon}>
        <img src={iconImage} alt="Icon" style={styles.icon} />
        <div style={styles.heading}>Follow Us on Instagram</div>
        <div style={styles.textsm}>@coolmatetheme</div>
        <div style={styles.text}>Contemporary wardrobe staples and authentic style for the modern man and women. Follow us for the latest trends. Tag us and get featured @coolmatetheme</div>
        
       <div style={{flexDirection:'row',gap:'2vw'}}>
       <img src={insta} alt="Instagram" style={styles.socialIcon} />
        <a className="stretched-link no-gutters"  href='/' style={styles.insta}>instagram.com/coolmatetheme</a>
       </div>
      </div>
      <div style={styles.rightcon}>
        <div style={styles.imageRow}>
          <img src={sm1} alt="Product" style={styles.image} />
          <img src={sm2} alt="Product" style={styles.image} />
        </div>
        <div style={styles.imageRow}>
          <img src={sm3} alt="Product" style={styles.image} />
          <img src={sm4} alt="Product" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', 
    padding: '0 9vw',
    backgroundColor: 'rgba(217, 217, 217, 0.27)',
    marginBottom:'6vw'
  },
  leftcon: {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '0 2vw', 
    maxWidth: '50%',
  },
  icon: {
    width: '2vw',
    marginBottom: '0.69vw',
  },
  rightcon: {
    flex: 1, // Allows for a flexible layout that adapts to the screen size
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: '2.9vw',
    maxWidth: '50%', // Ensures that on larger screens it takes up only half the space
  },
  imageRow: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  image: {
    width: '48%', // Adjusted for better responsiveness
    objectFit: 'cover', // Adjusted from 'contain' to 'cover' for a better visual appearance
  },
  heading: {
    fontSize: '2.08vw',
    fontWeight: '700',
    color: 'black',
    marginBottom: '0.7vw',
  },
  insta: {
    fontSize: '1.11vw',
    fontWeight: '300',
    color: 'black',
  },
  textsm: {
    fontSize: '1.11vw',
    fontWeight: '400',
    color: 'black',
    marginBottom: '1vw',
  },
  text: {
    fontSize: '1.11vw',
    fontWeight: '300',
    color: 'black',
    marginBottom: '2vw',
  },
  socialIcon: {
    height:'auto',
    width: '2vw',
    resize:'contain',
    marginRight:'0.5vw'
    
  },
};
