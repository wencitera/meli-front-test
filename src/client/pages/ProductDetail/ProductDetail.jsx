import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { getItemsById } from '../../services/public.services';
import { useAsync } from '../../hooks/useAsync';
import Loader from '../../components/Loader/Loader';
import Detail from '../../components/Detail/Detail';

const ProductDetail = () => {
    const {id} = useParams();
    const { loading, callEndpoint } = useFetchAndLoad();
    const [ productDetail, setProductDetail ] = useState();

    const getProductDetail = async () => await callEndpoint(getItemsById(id));

    useAsync(getProductDetail, setProductDetail, () => {}, [id])


    return (
    <>
    { 
      productDetail === undefined ? <Loader />
    :
      <Detail productDetail={productDetail} />
    }
    </>
  )
}

export default ProductDetail