import React, { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import './ItemList.scss';
import Item from '../../components/Item/Item'
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import {useAsync} from '../../hooks/useAsync'
import { getItemsBySearch } from '../../services/public.services';
import Breadcrum from '../../components/Breadcrum/Breadcrum';

const ItemList = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [searchedItems, setSearchedItems] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');

  const getItems = async () => { return await callEndpoint(getItemsBySearch(searchQuery))};
  const setItems = (data) => setSearchedItems(data);
  
  useAsync(getItems, setItems, () => {}, [searchQuery])

  
  return (
      <main className='container'>
        {searchedItems.length === 0 ? (
          "Cargando resultados..."
        ) : (
          <>
          <Breadcrum breadcrum={searchedItems.categories} />
            {searchedItems.items.map(item => (
              <Fragment key={item.id}>
                <Item
                  id={item.id}
                  picture={item.picture} 
                  title={item.title} 
                  amount={item.price.amount} 
                  free_shipping={item.free_shipping} 
                  location={item.location} 
                />
              </Fragment>
            ))}
          </>
        )}
      </main>
  );
};

export default ItemList;
