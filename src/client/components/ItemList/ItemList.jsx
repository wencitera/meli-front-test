import React, { Fragment } from 'react'
import './ItemList.scss'
import Breadcrum from '../Breadcrum/Breadcrum'
import Item from '../Item/Item'
import PropTypes from 'prop-types'

const ItemList = ({ categories, items }) => {

  return (
        <main className='container'>
            <Breadcrum breadcrum={categories} />
            {items.map(item => (
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
        </main>
  )
}

ItemList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.shape({
          amount: PropTypes.string.isRequired,
        }).isRequired,
        free_shipping: PropTypes.bool.isRequired,
        location: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ItemList;