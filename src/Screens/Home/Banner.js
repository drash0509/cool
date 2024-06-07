
import React, { useState } from "react";
import mainbg from "../../Assets/Images/Banner.png";
import phone from "../../Assets/Images/phone.png";
import delivery from "../../Assets/Images/delivery.png";
import ret from "../../Assets/Images/return.png";

export default function Banner() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const buttonStyles = isButtonHovered
    ? { ...styles.button, ...styles.buttonHover }
    : styles.button;

  return (
    <>
      <div style={styles.mainScreen}>
        <div style={styles.textSection}>
          <div style={styles.txt}>FIND THE BEST FASHION STYLE FOR YOU</div>
          <button
            className="button-hover-effect"
            style={buttonStyles}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            SHOP NOW
          </button>
        </div>
      </div>

      <div style={styles.iconSection}>
        <div style={styles.iconContainer}>
          <img src={ret} alt="Return Policy" style={styles.iconImage} />
          <div>
            <text style={styles.icontextbig}>30 DAYS RETURN</text>
          </div>
          <div>
            <text style={styles.icontextsmall}>Simply return it within 30 days for an exchange.</text>
          </div>
        </div>

        <div style={styles.iconContainer}>
          <img src={delivery} alt="Free Delivery" style={styles.iconImage} />
          <div>
            <text style={styles.icontextbig}>FREE US DELIVERY</text>
          </div>
          <div>
            <text style={styles.icontextsmall}>On orders over $200!</text>
          </div>
        </div>

        <div style={styles.iconContainer}>
          <img src={phone} alt="Support" style={styles.iconImage} />
          <div>
            <text style={styles.icontextbig}>Support 24/7</text>
          </div>
          <div>
            <text style={styles.icontextsmall}>Contact us 24 hours a day, 7 days a week</text>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  mainScreen: {
    width: "100vw",
    height: "48vw",
    backgroundImage: `url(${mainbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  textSection: {
    maxWidth: "26vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "3vw",
        margin: "0 5vw",

  },

  txt: {
    fontSize: "3.5vw",
    lineHeight:'3.7vw',
     fontWeight: "900",
    textAlign: "left",
    color: "black",
    
  },

  button: {
    padding: "0.6vw 0.9vw",
    borderRadius: "0.4vw",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.3vw",
    outline: "none",
    border: "none",
  },

  buttonHover: {
    outline: "none",
    backgroundColor: "rgba(0,0,0,0)",
  color:'black',
    border: "2px solid black",
  },

  iconSection: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    padding: "3vw 5vw",
  },

  iconContainer: {
    width: "16vw",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  iconImage: {
    height: "2vw", // Reduced from 2.5vw to make the icons smaller
    width: "auto",
    margin: "0.25vw", // Reduced margin for tighter layout
  },

  icontextbig: {
    fontSize: "1.3vw",
    fontWeight: "900",
    textAlign: "center",
    color: "black",
    marginBottom: "0.5vw", // Added to reduce space between icon and this text
  },
  icontextsmall: {
    fontSize: "1vw",
    fontWeight: "400",
    textAlign: "center", // Changed to center to match the alignment of icontextbig
    color: "black",
    marginTop: "0.25vw", // Reduced to bring text closer to icontextbig
  },


  '@media (max-width: 768px)': {
    mainScreen: {
      height: "auto",
      padding: "20px",
      flexDirection: "column",
      justifyContent: "center",
    },
    textSection: {
      maxWidth: "100%",
      gap: "20px",
    },
    txt: {
      fontSize: "5vw",
    },
    button: {
      width: "auto",
      padding: "10px 20px",
      fontSize: "4vw",
    },
    iconSection: {
      flexDirection: "column",
      padding: "20px",
    },
    iconContainer: {
      width: "100%",
      marginBottom: "20px",
    },
    iconImage: {
      height: "40px", // Adjusted size for smaller screens
      margin: "10px", // Adjusted margin for a tighter layout
    },
    icontextbig: {
      fontSize: "4vw",
      marginBottom: "10px", // Adjusted for smaller screens
    },
    icontextsmall: {
      fontSize: "3vw",
      marginTop: "5px", // Adjusted for smaller screens
    },
  }
};