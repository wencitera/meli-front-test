import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { getItemsById } from '../../services/public.services';
import { useAsync } from '../../hooks/useAsync';
import './ProductDetail.scss'
import { formatCurrency } from '../../utils/currency.formatter.utility';
import Breadcrum from '../../components/Breadcrum/Breadcrum';

const ProductDetail = () => {
    const {id} = useParams();
    const { loading, callEndpoint } = useFetchAndLoad();
    const [ productDetail, setProductDetail ] = useState();

    const getProductDetail = async () => await callEndpoint(getItemsById(id));

    useAsync(getProductDetail, setProductDetail, () => {}, [id])


    return (
    <>
    { productDetail === undefined ? 
      <h1>Cargando resultados</h1> 
    :
    <>
    <div className="product-detail">
      <Breadcrum breadcrum={productDetail.category}/>
      <div className="product-section">
        <div className="product-image">
          <img src={productDetail.item.picture} alt="iPod Touch" />
        </div>
        <div className="product-info">
          <span className="product-status">{productDetail.item.condition === 'new' ? 'Nuevo' : 'Usado'}</span> • <span>234 vendidos</span>
          <h1 className="product-title">{productDetail.item.title}</h1>
          <h2 className="product-price">{formatCurrency(productDetail.item.price.amount)}</h2>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
      <div className="product-description">
        <h2>Descripción del producto</h2>
        <p>{productDetail.item.description.replace('\\n\\n', '<br/>')}</p>
      </div>
    </div>
    </>
    }</>
  )
}

export default ProductDetail