import React, { useState, useEffect } from 'react';
import dropdownImage from '../../src/Assets/Images/dropdown.png'; // Make sure the path is correct

function Dropdown({ placeholder, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [rotate, setRotate] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setRotate(!rotate);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setRotate(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive styles
  const getStyles = (windowWidth) => {
    return {
      container: {
        position: 'relative',
        width: windowWidth < 768 ? '100%' : '12vw', // Adjust width based on screen size
        border: '0.5px solid black',
        padding: windowWidth < 768 ? '5%' : '1vw', // Adjust padding for smaller screens
      },
      inputButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      },
      input: {
        flexGrow: 1,
        border: 'none',
        outline: 'none',
        marginRight: '5%',
        width: '80%',
      },
      button: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        transform: rotate ? 'rotate(180deg)' : 'none',
        outline: 'none',
        width: '15%',
        textAlign: 'right',
        padding: '0',
      },
      dropdownImage: {
        maxWidth: '0.8vw',
        height: 'auto',
      },
      dropdownList: {
        listStyleType: 'none',
        padding: 0,
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        border: '1px solid #ddd',
        marginTop: '5px',
        zIndex: 1000,
      },
      listItem: {
        padding: '10px',
        cursor: 'pointer',
      },
    };
  };

  const styles = getStyles(windowWidth);

  return (
    <div style={styles.container}>
      <div style={styles.inputButtonContainer}>
        <input
          type="text"
          value={selectedItem}
          placeholder={placeholder}
          readOnly
          style={styles.input}
        />
        <button onClick={toggleDropdown} style={styles.button}>
          <img src={dropdownImage} alt="Dropdown" style={styles.dropdownImage}/>
        </button>
      </div>
      {isOpen && (
        <ul style={styles.dropdownList}>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleSelectItem(item)} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
