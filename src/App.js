import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainRoute from './routes/routes';
import './index.css'
import Search from './Searchbar';
const App = () => {
  return (
    <Router>
    <div >
     <Navbar/>
     <MainRoute/>
</div>
  {/* <Search/>    */}

    </Router>


  )
}

export default App
