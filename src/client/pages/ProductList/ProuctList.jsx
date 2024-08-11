import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import {useAsync} from '../../hooks/useAsync'
import { getItemsBySearch } from '../../services/public.services';
import Loader from '../../components/Loader/Loader';
import ItemList from '../../components/ItemList/ItemList';

const ProductList = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [searchedItems, setSearchedItems] = useState();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  const limitParams = new URLSearchParams(location.limit);
  const limitQuery = limitParams.get('limit') ?? 4;


  const getItems = async () => { return await callEndpoint(getItemsBySearch(searchQuery, limitQuery))};
  const setItems = (data) => setSearchedItems(data);
  
  useAsync(getItems, setItems, () => {}, [searchQuery])

  
  return (
    <>
      {
        searchedItems === undefined 
        ? <Loader /> 
        : <ItemList {...searchedItems} />
      }
    </>
  );
};

export default ProductList;
