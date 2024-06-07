import React, { useState } from "react";
import mainbg from '../../Assets/Images/BannerW1.png';

export default function Women() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonHoverStyle = {
    backgroundColor: "white", 
    color: "black", 
  };

  return (
    <div>
      <div style={styles.mainScreen}>
        <div style={styles.content}>
          <div style={styles.textSection}>
            <div style={styles.txt}>
              <p style={{ fontSize: "1.3vw", lineHeight: '0.3vw', fontWeight: "700", textAlign: 'initial' }}>
                WOMEN OF SUMMER
              </p>
              <p style={{ fontSize: "3.5vw", lineHeight: '3.5vw', fontWeight: "900", textAlign: 'initial' }}>
                WOMEN DRESSES
              </p>
            </div>
            <button
              style={isHovered ? {...styles.button, ...buttonHoverStyle} : styles.button}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={()=>{console.log('hel0')}}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainScreen: {
    width: "100vw",
    height: "43.23vw",
    backgroundImage: `url(${mainbg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 5vw",
    // zIndex:1000
  },
  content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100vw",
    padding: "0 3vw",  
  },
  textSection: {
    marginLeft:"2vw",
    maxWidth: "19vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  button: {
    padding: "0.6vw 0.8vw", 
    borderRadius: "0.4vw",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.3vw",
    marginTop: "1vw", 
    outline: "none",
    border: "none",
    cursor:'pointer'
  },
  txt: {
    color: "black",
  },
};
