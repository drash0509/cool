import React, { useState,useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Searchbar from '../Searchbar';
import fav from '../Assets/Images/favicon.png';
import favfilled from '../Assets/Images/navfavfilled.png';
import profile from '../Assets/Images/Profile.png';
import cart from '../Assets/Images/cart.png';
import cartfilled from '../Assets/Images/cart.png';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [hoverItem, setHoverItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(location.pathname === '/FavScreen');
  const [isCartClicked, setIsCartClicked] = useState(location.pathname === '/CartScreen');

  useEffect(() => {
    setIsFavClicked(location.pathname === '/FavScreen');
  }, [location.pathname]);

  useEffect(() => {
    setIsCartClicked(location.pathname === '/CartScreen');
  }, [location.pathname]);

  const handleFavClick = () => {
    if (location.pathname !== '/FavScreen') {
      navigate('/FavScreen');
    } else {
      navigate(-1);
    }
  };

  const handleCartClick = () => {
    if (location.pathname !== '/CartScreen') {
      navigate('/CartScreen');
    } else {
      navigate(-1);
    }
  };

  const isActive = (pathname) => location.pathname === pathname;


  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">COOLMATE</NavLink>
      <button
        className="nav-toggle"
        aria-expanded={isNavExpanded}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        &#9776;
      </button>
      <div className={`nav-menu ${isNavExpanded ? "expanded" : ""}`}>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Collection" className="nav-link">Collection</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/AboutUs" className="nav-link">AboutUs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ContactUs" className="nav-link">ContactUs</NavLink>
          </li>
        </ul>


        
      </div>

 

<div className="navbar-right">
<Searchbar/>

<button className="nav-link" style={{ background: 'none', border: 'none', outline: 'none' }} onClick={handleCartClick}>
            <img src={isCartClicked ? cartfilled : cart} alt="Cart" style={{ height: '3.5vh', width: 'auto', resize: 'contain' }} />
          </button>
          <button className="nav-link" style={{ background: 'none', border: 'none', outline: 'none' }} onClick={handleFavClick}>
            <img src={isFavClicked ? favfilled : fav} alt="Favorites" style={{ height: '3.5vh', width: 'auto', resize: 'contain', margin: "0 2vw" }} />
          </button>
          <button className="nav-link" style={{ background: 'none', border: 'none', outline: 'none' }} onClick={ ()=>{navigate('/LoginScreen')} 
}>
            <img src={profile} alt="Profile" style={{ height: '3.5vh', width: 'auto', resize: 'contain', marginRight: '2vw' }} />
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
