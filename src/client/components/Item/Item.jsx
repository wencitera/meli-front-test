import React from 'react'
import PropTypes from 'prop-types'
import './Item.scss'
import { useNavigate } from 'react-router-dom';
import FreeShipIcon from '../../assets/ic_shipping.png'
import { formatCurrency } from '../../utils/currency.formatter.utility';

const Item = ({ id, picture, title, amount, free_shipping, location }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/item/${id}`);
    };
    
  return (
    <div className="item" onClick={handleClick}>
        <div className="item-data">
          <div className="item-image">
              <img src={picture} alt={title} />
          </div>
          <div className="item-details">
              <h2 className="item-price">
                {formatCurrency(amount)}
                {free_shipping && (
                    <img className="item-freeshiping-icon" src={FreeShipIcon} alt="Envío Gratis" />
                )}
              </h2>
              <h1 className="item-name">{title}</h1>
          </div>
        </div>
        <span className="item-location">{location}</span>
    </div>
  )
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
  };
  
export default Item