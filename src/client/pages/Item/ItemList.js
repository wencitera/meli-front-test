import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

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
          currency: item.sale_price?.currency_id || 'N/A', 
          amount: item.sale_price?.amount || 'N/A',
          // decimals: item.sale_price?.decimals // Uncomment if needed
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
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
    <div>
      {!loaded ? "Cargando resultados..." : (
        <ul>
          {searchedItems.map(item => (
            <li key={item.id}>
              <img src={item.picture} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.price.currency} {item.price.amount}</p>
              <p>Condition: {item.condition}</p>
              {item.free_shipping && <p>Free Shipping</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
