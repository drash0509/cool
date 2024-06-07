import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './Components/ProductCard'; // Adjust the path as necessary
import items from './items'; // Your items source

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      performSearch(decodeURIComponent(query));
    }
  }, [searchParams]);

  const performSearch = (query) => {
    let matchedItems = [];
    
    items.forEach(category => {
      category.categories.forEach(subCategory => {
        const matchedProducts = subCategory.products.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        if (matchedProducts.length > 0) {
          matchedItems = [...matchedItems, ...matchedProducts];
        }
      });
    });
    setResults(matchedItems);
  };
  if (results.length === 0) {
    return <div>No results found.</div>;
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap:'10vh',padding:'5vh',paddingTop:'10vh' }}>
      {results.map(item => (
        <ProductCard
          key={item.id}
          id={item.id}
          imageUrl={item['image-url']}
          title={item.title}
          description={item.description}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default SearchResults;
