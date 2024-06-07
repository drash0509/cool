import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rating from '../../Components/Rating';

// Helper function to listen to window size
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

export default function Feedback() {
  const [width] = useWindowSize();

  const feedbackData = [
    { rating: 5, feedback: "Very Good i love it, Amazing quality", desc: "Best purchase I’ve made this winter! The color and knitting are exquisite and it’s so comfy! Went from NYC to Miami without ever taking it off. Super Cute!!" },
    { rating: 4, feedback: "Cum sociis natoque", desc: "Best purchase l’ve made this winter ! The color and kitting are exquisite and it’s so comfy !Went form NYC to Miami without ever taking it off. Super Cute!!" },
    { rating: 5, feedback: "Great fit very comfertable", desc: "Best purchase l’ve made this winter ! The color and kitting are exquisite and it’s so comfy !Went form NYC to Miami without ever taking it off. Super Cute!!" },
    { rating: 5, feedback: "Very Good i love it, Amazing quality", desc: "Best purchase I’ve made this winter! The color and knitting are exquisite and it’s so comfy! Went from NYC to Miami without ever taking it off. Super Cute!!" },
    { rating: 4, feedback: "Cum sociis natoque", desc: "Best purchase l’ve made this winter ! The color and kitting are exquisite and it’s so comfy !Went form NYC to Miami without ever taking it off. Super Cute!!" },
    { rating: 5, feedback: "Great fit very comfertable", desc: "Best purchase l’ve made this winter ! The color and kitting are exquisite and it’s so comfy !Went form NYC to Miami without ever taking it off. Super Cute!!" },
    { rating: 5, feedback: "Very Good i love it, Amazing quality", desc: "Best purchase I’ve made this winter! The color and knitting are exquisite and it’s so comfy! Went from NYC to Miami without ever taking it off. Super Cute!!" },
    { rating: 4, feedback: "Cum sociis natoque", desc: "Best purchase l’ve made this winter ! The color and kitting are exquisite and it’s so comfy !Went form NYC to Miami without ever taking it off. Super Cute!!" },
    { rating: 5, feedback: "Great fit very comfertable", desc: "Best purchase l’ve made this winter ! The color and kitting are exquisite and it’s so comfy !Went form NYC to Miami without ever taking it off. Super Cute!!" },
  ];

  const itemsPerSlide = width > 1024 ? 3 : width > 768 ? 2 : 1;

  const chunkedFeedbackData = feedbackData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerSlide);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; 
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <>
      <div style={{marginBottom:'6vw'
}}>

<div style={styles.header}>
        <p style={styles.headerText}>
        LET CUSTOMERS SPEAK FOR US
        </p>
        <div style={styles.subHeaderTextContainer}>
          <p style={styles.subHeaderText}>
          Hear from our customers: their glowing feedback underscores our dedication to quality and service
          </p>
        </div>
      </div>

       
        <Carousel 
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          style={styles.carousel}
        >
          {chunkedFeedbackData.map((feedbackGroup, index) => (
            <div key={index} style={styles.slide}>
              {feedbackGroup.map((feedback, feedbackIndex) => (
                <div key={feedbackIndex} style={styles.card}>
                  <div style={styles.contentWrapper}>
                    <Rating rating={feedback.rating.toString()}/>
                    <div style={styles.feedback}>{feedback.feedback}</div>
                    <div style={styles.desc}>{feedback.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

const styles = {
  carousel: {
    height: 'auto',
    padding: '0 2vw',
  },
  slide: {
    paddingBottom:'1vw',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    padding:'1vw 2vw',
  },
  headerText: {
    fontWeight: '700',
    lineHeight:'1',
    fontSize: '2.1vw',
  },
  subHeaderTextContainer: {
    margin: 'auto',
    paddingBottom:'0.2vw',
    width:'33vw',
    
  },
  subHeaderText: {
    fontWeight: '300',
    fontSize:'1.1vw',
    lineHeight:'1.3vw',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '30%', 
  },
  contentWrapper: {
    padding: '2vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedback: {
    textAlign: 'center', 
    padding: '2vw', 
    fontWeight: '700', 
    fontSize: '1.3vw',
  },
  desc: {
    textAlign: 'center', 
    color: 'rgba(100, 98, 98, 1)',
    fontWeight: '400', 
    fontSize: '1.1vw',
  },
};
