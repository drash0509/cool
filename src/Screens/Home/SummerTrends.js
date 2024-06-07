import React, { useState, useEffect } from 'react';
import S1 from '../../Assets/Images/S1.png';
import S2 from '../../Assets/Images/S2.png';
import S3 from '../../Assets/Images/S3.png';

const Card = ({ backgroundImage }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dynamicStyles = getDynamicStyles(windowWidth);

  const buttonStyles = isButtonHovered
    ? { ...dynamicStyles.button, ...dynamicStyles.buttonHover }
    : dynamicStyles.button;

  return (
    <div style={{ ...dynamicStyles.card, backgroundImage: `url(${backgroundImage})` }}>
      <button
        style={buttonStyles}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        SHOP NOW
      </button>
    </div>
  );
};

const SummerTrends = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dynamicStyles = getDynamicStyles(windowWidth);

  return (
    <div style={{marginBottom:'4vw'}}>
      <div style={dynamicStyles.header}>
        <p style={dynamicStyles.headerText}>
          SUMMER TRENDS
        </p>
        <div style={dynamicStyles.subHeaderTextContainer}>
          <p style={dynamicStyles.subHeaderText}>
            See the hottest trends in eyewear and eyeglass styles and find your next pair that fits your face shape and personality.
          </p>
          
        </div>
      </div>
      <div style={dynamicStyles.cardsContainer}>
        <Card backgroundImage={S1} />
        <Card backgroundImage={S2} />
        <Card backgroundImage={S3} />
      </div>
    </div>
  );
};

function getDynamicStyles(windowWidth) {
  const isMobile = windowWidth < 768;
  return {
    header: {
      textAlign: 'center',
      padding: isMobile ? '5vw' : '1vw 2vw',
    },
    headerText: {
      fontWeight: '700',
      lineHeight:'1',
      fontSize: isMobile ? '5vw' : '2.1vw',
    },
    subHeaderTextContainer: {
      margin: 'auto',
      paddingBottom:'0.2vw',
      width: isMobile ? '90%' : '33vw',
      
    },
    subHeaderText: {
      fontWeight: '300',
      fontSize: isMobile ? '4vw' : '1.1vw',
      lineHeight:'1.3vw',
    },
    cardsContainer: {
      height: isMobile ? 'auto' : '33vw',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '2vw' : '1vw',
      paddingInline: '1vw',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: isMobile ? '80vw' : '33vw',
      height: isMobile ? '40vw' : '32.4vw',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      padding: isMobile ? '3vw' : '1.5vw',
      marginBottom: isMobile ? '2vw' : '0',
    },
    button: {
      padding: isMobile ? "3vw 6vw" : "0.6vw 0.8vw",
      borderRadius: "0.4vw",
      backgroundColor: "white",
      color: "black",
      outline: "none",
      border: "none",
      fontSize: isMobile ? "4vw" : "1.3vw",
      marginTop: "1vw",
      cursor: 'pointer',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    },
    buttonHover: {
      outline: "none",
    backgroundColor: "rgba(0,0,0,0)",
  color:'black',
    border: "2px solid black",
    },
  };
}

export default SummerTrends;
