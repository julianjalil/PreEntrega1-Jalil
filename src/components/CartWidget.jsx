import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const CartWidget = () => {
  return (
    <div style={cartIconStyle}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <div style={num}>1</div>
    </div>
  );
};

const cartIconStyle = {
    position: 'relative',
    display: 'inline-block',
  };
  
  const num = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: '60%',
    padding: '4px',
    fontSize: '10px',
  };

export default CartWidget;