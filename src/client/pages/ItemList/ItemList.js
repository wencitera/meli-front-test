import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './ItemList.scss'

const ItemList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  const [searchedItems, setSearchedItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search`, {
      params: {
        q: searchQuery,
        limit: 4,
      },
    })
    .then(response => {
      const items = response.data.results.map(item => ({
        id: item.id,
        title: item.title,
        price: { 
          currency: item.sale_price?.currency_id, 
          amount: Math.floor(item.sale_price?.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        location: 'Buenos aires'
      }));
      
      setSearchedItems(items);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      setLoaded(true);
    });
  }, [searchQuery]);

  return (
    <main className='container'>
      {!loaded ? "Cargando resultados..." : (
        <>
          {/* Breadcrum component */}
          {searchedItems.map(item => (
            <div className="item">
            <div className="item-data">
              <div className="item-image">
                <img src={item.picture} alt="" />
              </div>
              <div className="item-details">
                <h2 className="item-price">
                  $ {item.price.amount}
                  {item.free_shipping && (
                    <img className="item-freeshiping-icon" src={null} alt="free shipping" />
                  )}
                </h2>
                <h1 className="item-name">{item.title}</h1>
              </div>
            </div>
            <h6 className="item-location">{item.location}</h6>
          </div>
          ))}
        </>
      )}
    </main>
  );
};

export default ItemList;
