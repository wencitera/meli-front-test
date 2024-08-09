import React, { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import './ItemList.scss';
import Item from '../../components/Item/Item'
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import {useAsync} from '../../hooks/useAsync'
import { getItemsBySearch } from '../../services/public.services';

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
    <Fragment>
      {/* Aquí es donde debes asegurarte de que la estructura de los datos es la correcta */}
      <main className='container'>
        {searchedItems.length === 0 ? (
          "Cargando resultados..."
        ) : (
          <>
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
    </Fragment>
  );
};

export default ItemList;
