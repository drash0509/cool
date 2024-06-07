import React,{useState} from "react";
import mainbg from '../../Assets/Images/BannerC1.png';

export default function Childern() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const buttonStyles = isButtonHovered
  ? { ...styles.button, ...styles.buttonHover }
  : styles.button;
  return (
    <div>
      <div style={styles.mainScreen}>
        <div style={styles.content}>
          <div style={styles.textSection}>
            <div style={styles.txt}>
            <p style={{ fontSize: "1.3vw", lineHeight: '0.3vw', fontWeight: "700", textAlign: 'initial' }}>
                 BABY OF SUMMER
              </p>
              <p style={{ fontSize: "3.5vw",lineHeight:'3.5vw', fontWeight: "900", textAlign: 'initial' }}>
                CHILDREN DRESSES
              </p>
            </div>
            <button className="button-hover-effect"  style={buttonStyles}
           onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}>SHOP NOW</button>
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 5vw",
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
  },
   buttonHover: {
    outline: "none",
    border: "2px solid white",         
  },
  txt: {
    color: "black",
  },
};
