import React from 'react';
import Women from './Women'; 
import Men from './Men';   
import Children from './Children';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './customCarouselStyles.css'; 



export default function HomeSummer() {
  return (
    <>
     <div style={{marginBottom:'4vw',
    }}>
     <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        className="my-custom-carousel whitec"
      >

        <div>
          <Women />
        </div>
        <div>
          <Men />
        </div>
        <div>
          <Children />
        </div>
      </Carousel>
     </div>
    </>
  );
}
