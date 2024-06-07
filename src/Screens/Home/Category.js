import React, { useState } from 'react';
import MenCategory from './mencategory';
import WomenCategory from './WomenCategory';

export default function Category() {
  const [activeCategory, setActiveCategory] = useState('men');
  const [hoveredButton, setHoveredButton] = useState('');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const getButtonStyles = (category) => {
    let baseStyle = {
      width: "16.8vw",
      padding: "1.1vw 1.1vw",
      borderRadius: "0.4vw",
      backgroundColor: "black",
      color: "white", 
      fontSize: "1.3vw",
      border: "1px solid white", 
      cursor: 'pointer',
      margin: '0 1.5vw', 
    };

    if (hoveredButton === category && activeCategory !== category) {
      baseStyle = { ...baseStyle, backgroundColor: '#e1e1e1', color: 'black',border:'1px solid black' }; 
    }

    if (activeCategory === category) {
      baseStyle = { ...baseStyle, backgroundColor: 'white', color: 'black', border:'1px solid white'};
    }

    return baseStyle;
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>POPULAR CATEGORIES</div>
      <div style={styles.btnGroup}>
        <button
          style={getButtonStyles('men')}
          onMouseEnter={() => setHoveredButton('men')}
          onMouseLeave={() => setHoveredButton('')}
          onClick={() => handleCategoryChange('men')}
        >
          MEN COLLECTION
        </button>
        <button
          style={getButtonStyles('women')}
          onMouseEnter={() => setHoveredButton('women')}
          onMouseLeave={() => setHoveredButton('')}
          onClick={() => handleCategoryChange('women')}
        >
          WOMEN COLLECTION
        </button>
      </div>
      <div>
        {activeCategory === 'men' && <MenCategory />}
        {activeCategory === 'women' && <WomenCategory />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3vw',
    paddingBottom: '4vw',
    backgroundColor: 'black',
    marginBottom:'3vw'
  },
  title: {
    fontSize: '2.08vw',
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    marginBottom: '3vw',
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};
