import React from 'react';
import logo from '../../Assets/Images/logo.png';
import img from '../../Assets/Images/about.png';

const WelcomeAbout = () => {
  const styles = {
    container: {
      fontFamily: "'Open Sans', sans-serif",
      color: '#3D3028',
      backgroundColor: 'white',
      padding: '2vw',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap', 
      margin: '2vw 0',
    },
    column: {
      flex: '1', 
      maxWidth: '40%', 
      padding: '0 2vw',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: '600',
      fontSize: '2.5vw',
      color: '#3D3028',
      textAlign: 'center',
    },
    subHeader: {
      fontWeight: '300',
      fontSize: '1.3vw',
      
    },
    image: {
      maxWidth: '100%',
      height: '50%',
      
    },
    boldText: {
      fontWeight: '600',
      fontSize: '1.5vw',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={{ ...styles.column, ...styles.textContainer }}>
          <h1 style={styles.headerText}>MAKE YOUR OWN FASHION</h1>
          <p style={styles.subHeader}>
            Welcome to COOLMATE, where fashion meets individuality. Our mission is to empower your style with our exclusive selection of clothing and accessories, designed for the contemporary individual. Embrace the freedom to be uniquely you with COOLMATE.
          </p>
        </div>
        <div style={styles.column}>
          <img src={img} alt="About COOLMATE" style={styles.image} />
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.column}>
          <img src={logo} alt="COOLMATE Logo" style={styles.image} />
        </div>
        <div style={{ ...styles.column, ...styles.textContainer }}>
          <h2 style={styles.boldText}>OUR JOURNEY</h2>
          <p style={styles.subHeader}>
            From a fervent passion for unique fashion, COOLMATE was born a place for those daring to be different. With a commitment to quality and style, our collections are designed to celebrate your unique identity. Join us and let your fashion journey begin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAbout;

