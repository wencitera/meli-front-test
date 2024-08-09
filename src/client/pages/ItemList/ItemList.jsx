import React, { useState, useCallback, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import './ItemList.scss';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { createItemListAdapter } from '../../adapters/item.adapter';
import { getItemsBySearch } from '../../services/public.services';
import { useAsync } from '../../hooks/useAsync';
import Item from '../../components/Item/Item';

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
            <Fragment key={item.id}>
              <Item id={item.id}  picture={item.picture} title={item.title} amount={item.price.amount} free_shipping={item.free_shipping} location={item.location} />
            </Fragment>
          ))}
        </>
      )}
    </main>
  );
};

export default ItemList;
