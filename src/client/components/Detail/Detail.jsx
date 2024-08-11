import React from 'react'
import './Detail.scss'
import PropTypes from 'prop-types'
import Breadcrum from '../Breadcrum/Breadcrum'
import { formatCurrency } from '../../utils/currency.formatter.utility'

const Detail = ({ productDetail }) => {
  return (
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
  )
}

Detail.propTypes = {
    productDetail: PropTypes.shape({
      category: PropTypes.array.isRequired,
      item: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        condition: PropTypes.oneOf(['new', 'used']).isRequired,
        sold_quantity: PropTypes.number.isRequired,
        price: PropTypes.shape({
          amount: PropTypes.string.isRequired
        }).isRequired,
        description: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

export default Detail