import React, { useState } from 'react';
import filter from '../../Assets/Images/filter.png'

const ProductFilters = ({ uniqueCategories, setCategoryFilter, setSortPrice, setRatingFilter }) => {
  const [showFilters, setShowFilters] = useState(false); 

  const selectStyle = {
    width: '100%', 
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const labelStyle = {
    fontWeight:'400',
    fontSize:'1.1vw',
    marginBottom: '5px',
    display: 'block',
    color: 'black',

  };
  const buttonStyle = {
    padding: '10px 20px',
    marginBottom: '20px',
    cursor: 'pointer',
    backgroundColor: showFilters ? '#D9D9D9' : '#D9D9D9',
    color: '#000',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const filterIconStyle = {
    width: '20px', 
    height: 'auto',
    marginRight: '10px', 
  };
  
  const filterTextStyle = {
    fontSize: '16px', 
    fontWeight: '500',
  };
  const filtersContainerStyle = {
    width: '20vw',
    position: 'relative',
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: '20px',
    minHeight: '100vh', 
    display: 'flex', 
    flexFlow: 'column nowrap', 
    overflowY: 'auto', 
  };
  const toggleFilters = () => setShowFilters(!showFilters); 

  return (
    <div className="filters-container" style={filtersContainerStyle}>
     <button onClick={toggleFilters} style={buttonStyle}>
  <img src={filter} alt="filter" style={filterIconStyle} />
  <span style={filterTextStyle}>Filters</span>
</button>


      {showFilters && ( 
        <React.Fragment>
        <div style={{backgroundColor:'#D9D9D9',padding:'1vw',borderRadius:'1vw'}}>

          <div>
            <label style={labelStyle} htmlFor="categoryFilter">Category</label>
            <select id="categoryFilter" style={selectStyle} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="">All Categories</option>
              {uniqueCategories.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle} htmlFor="sortPrice">Sort by Price</label>
            <select id="sortPrice" style={selectStyle} onChange={(e) => setSortPrice(e.target.value)}>
              <option value="">Sort by Price</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
          <div>
            <label style={labelStyle} htmlFor="ratingFilter">Rating</label>
            <select id="ratingFilter" style={selectStyle} onChange={(e) => setRatingFilter(parseInt(e.target.value))}>
              <option value="0">All Ratings</option>
              <option value="1">1 Star & Up</option>
              <option value="2">2 Stars & Up</option>
              <option value="3">3 Stars & Up</option>
              <option value="4">4 Stars & Up</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
  
};

export default ProductFilters;
