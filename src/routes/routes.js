import React from 'react'
import {  Routes, Route } from "react-router-dom";
import HomeMain from '../Screens/Home/HomeMain';
import CollectionMain from '../Screens/Collection/CollectionMain';
import ContactUsMain from '../Screens/ContactUs/ContactUsMain';
import AboutUsMain from '../Screens/Aboutus/AboutUsMain';
import ProductDetails from '../Screens/Productdetails';
import SearchResults from '../SearchResults';
import { FavoritesProvider } from '../Screens/FavScreens/FavouriteContext';
import { CartProvider } from '../Screens/Cart/CartContext';
import Login from '../LoginRegister/Login';
import FavScreen from '../Screens/FavScreens/FavScreen';
import CartScreen from '../Screens/Cart/CartScreen';
const MainRoute = () => {
  return (
    <CartProvider>
    <FavoritesProvider> 
    <Routes>
        <Route path="/" element={<HomeMain/>} />
        <Route path="/Collection" element={<CollectionMain/>} />
        <Route path="/ContactUs" element={<ContactUsMain/>} />
        <Route path="/AboutUs" element={<AboutUsMain/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/FavScreen" element={<FavScreen/>} />
        <Route path="/CartScreen" element={<CartScreen/>} />
        <Route path="/LoginScreen" element={<Login/>} />
      </Routes>

      </FavoritesProvider> 
</CartProvider>
 
  )
}

export default MainRoute;
