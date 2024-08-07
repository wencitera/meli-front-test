import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './ItemList.scss';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { createItemListAdapter } from '../../adapters/item.adapter';
import { getItemsBySearch } from '../../services/public.services';
import { useAsync } from '../../hooks/useAsync';

const ItemList = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [searchedItems, setSearchedItems] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');

  const getItems = async () => { return await callEndpoint(getItemsBySearch(searchQuery)); };

  const adaptItems = (data) => { setSearchedItems(createItemListAdapter(data)) };

  useAsync(getItems, adaptItems, () => {}, []);

  return (
    <main className='container'>
      {loading ? (
        "Cargando resultados..."
      ) : (
        <>
          {/* Breadcrum component */}
          {searchedItems.map(item => (
            <div className="item" key={item.id}>
              <div className="item-data">
                <div className="item-image">
                  <img src={item.picture} alt={item.title} />
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
