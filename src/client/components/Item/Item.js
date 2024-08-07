import React from 'react'
import PropTypes from 'prop-types'
import './Item.scss'

const Item = ({ id, picture, title, amount, free_shipping, location }) => {
  return (
    <div className="item">
        <div className="item-data">
        <div className="item-image">
            <img src={picture} alt={title} />
        </div>
        <div className="item-details">
            <h2 className="item-price">
            $ {amount}
            {free_shipping && (
                <img className="item-freeshiping-icon" src={null} alt="free shipping" />
            )}
            </h2>
            <h1 className="item-name">{title}</h1>
        </div>
        </div>
        <h6 className="item-location">{location}</h6>
    </div>
  )
}

// Define el tipo de las propiedades utilizando PropTypes
Item.propTypes = {
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
  };
  
export default Item