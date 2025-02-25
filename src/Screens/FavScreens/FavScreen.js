import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useFavorites} from './FavouriteContext'
import items from '../../items';
import FavCard from './FavCard';
import back from '../../Assets/Images/back.png';

const FavScreen = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
      };

    const { favorites, removeFavorite } = useFavorites(); 
    const findProductById = (id) => {
        for (let item of items) {
            for (let category of item.categories) {
                const product = category.products.find(product => product.id.toString() === id);
                if (product) return product;
            }
        }
        return null;
    };

    const handleRemove = (id) => {
        removeFavorite(id); 
    };

    return (
        <>
          <img
        src={back}
        alt="Back"
        style={{  
    cursor: 'pointer',
    margin: '0vw 2vw',
    width: '20px',
    height: '20px',
    marginTop:'1vw'
 }}
        onClick={handleBackClick}
      />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                gap: '2rem',
                marginBottom: '6vw',
                padding: '1vw 2vw',
            }}>
                {favorites.map((id) => {
                    const product = findProductById(id);
                    if (!product) return null;
                    return (
                        <FavCard
                            key={product.id}
                            id={product.id}
                            imageUrl={product['image-url']}
                            title={product.title}
                            description={product.description}
                            price={`${product.price.toFixed(2)}`}
                            onRemove={() => handleRemove(product.id)} 
                        />
                    );
                })}
            </div>
        </>
    );
};

export default FavScreen;
