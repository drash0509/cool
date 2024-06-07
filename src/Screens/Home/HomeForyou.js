import React, { useState, useEffect } from "react";
import ForyouCard from "./ForyouCards";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./customCarouselStyles.css"; // Ensure this path is correct
import FY1 from "../../Assets/Images/FY1.png";
import FY2 from "../../Assets/Images/FY2.png";
import FY3 from "../../Assets/Images/FY3.png";
import FY4 from "../../Assets/Images/FY4.png";

function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

function getDynamicStyles(width) {
  const isMobile = width < 768;
  return {
    carousel: {
      height: "auto",
      marginBottom: "4vw",
    },
    header: {
      textAlign: "center",
      padding: isMobile ? "5vw" : "1vw 2vw",
    },
    headerText: {
      fontWeight: "700",
      lineHeight: "1",
      fontSize: isMobile ? "5vw" : "2.1vw",
    },
    subHeaderTextContainer: {
      margin: "auto",
      paddingBottom: "0.2vw",
      width: isMobile ? "90%" : "33vw",
    },
    subHeaderText: {
      fontWeight: "300",
      fontSize: isMobile ? "4vw" : "1.1vw",
      lineHeight: "1.3vw",
    },
    slide: {
      paddingBottom: "4.5vw",
      height: "auto",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
    },
  };
}

export default function HomeForyou() {
  const width = useWindowSize();
  const dynamicStyles = getDynamicStyles(width);

  const cardsData = [
    { imageUrl: FY1, label: "Printed t-shirt", price: "$15.00", rating: 4 },
    { imageUrl: FY2, label: "Cargo joggers", price: "$10.00", rating: 3 },
    { imageUrl: FY3, label: "T-shirt", price: "$19.00", rating: 5 },
    { imageUrl: FY4, label: "Morty t-shirt", price: "$12.00", rating: 3 },
    { imageUrl: FY1, label: "Printed t-shirt", price: "$15.00", rating: 4 },
    { imageUrl: FY2, label: "Cargo joggers", price: "$10.00", rating: 3 },
    { imageUrl: FY3, label: "T-shirt", price: "$19.00", rating: 5 },
    { imageUrl: FY4, label: "Morty t-shirt", price: "$12.00", rating: 3 },
    { imageUrl: FY1, label: "Printed t-shirt", price: "$15.00", rating: 4 },
    { imageUrl: FY2, label: "Cargo joggers", price: "$10.00", rating: 3 },
    { imageUrl: FY3, label: "T-shirt", price: "$19.00", rating: 5 },
    { imageUrl: FY4, label: "Morty t-shirt", price: "$12.00", rating: 3 },
  ];

  const itemsPerSlide = width > 1024 ? 4 : width > 768 ? 2 : 1;

  const chunkedCardsData = cardsData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerSlide);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div style={{ marginBottom: "6vw" }}>
      <div style={dynamicStyles.header}>
        <p style={dynamicStyles.headerText}>NEW FOR YOU </p>
        <div style={dynamicStyles.subHeaderTextContainer}>
          <p style={dynamicStyles.subHeaderText}>
            Discover the latest, tailor-made trends designed to elevate your
            wardrobe with a touch of individuality.
          </p>
        </div>
      </div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        className="my-custom-carousel"
      >
        {chunkedCardsData.map((cardGroup, index) => (
          <div key={index} style={dynamicStyles.slide}>
            {cardGroup.map((card, cardIndex) => (
              <ForyouCard
                key={cardIndex}
                imageUrl={card.imageUrl}
                label={card.label}
                price={card.price}
                rating={card.rating}
              />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
