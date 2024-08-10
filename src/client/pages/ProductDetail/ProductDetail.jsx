import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { getItemsById } from '../../services/public.services';
import { useAsync } from '../../hooks/useAsync';
import './ProductDetail.scss'
import { formatCurrency } from '../../utils/currency.formatter.utility';
import Breadcrum from '../../components/Breadcrum/Breadcrum';
import Loader from '../../components/Loader/Loader';

const ProductDetail = () => {
    const {id} = useParams();
    const { loading, callEndpoint } = useFetchAndLoad();
    const [ productDetail, setProductDetail ] = useState();

    const getProductDetail = async () => await callEndpoint(getItemsById(id));

    useAsync(getProductDetail, setProductDetail, () => {}, [id])


    return (
    <>
    { productDetail === undefined ? 
      <Loader />
    :
        <article className="product-detail">
          <Breadcrum breadcrum={productDetail.category}/>
          <section className="product-section">
            <div className="product-image">
              <img src={productDetail.item.picture} alt={`Imagen de ${productDetail.item.title}`} />
            </div>
            <aside className="product-info">
              <span className="product-status"
                aria-label={`Estado del producto: ${productDetail.item.condition === 'new' ? 'Nuevo' : 'Usado'}`}>
                {productDetail.item.condition === 'new' ? 'Nuevo' : 'Usado'} - {productDetail.item.sold_quantity} vendidos
              </span>
              <h1 className="product-title">
                {productDetail.item.title}
              </h1>
              <p className="product-price">
                {formatCurrency(productDetail.item.price.amount)}
              </p>
              <button 
                aria-label={`Comprar ${productDetail.item.title}`}
                className="buy-button">
                  Comprar
              </button>
            </aside>
          </section>
          <section className="product-description" aria-labelledby="product-description-heading">
            <h2 id="product-description-heading">Descripción del producto</h2>
            <p>{productDetail.item.description}</p>
          </section>
        </article>
    }</>
  )
}

export default ProductDetail