import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={containerStyle}>
      <h2 style={textStyle}>{greeting}</h2>
    </div>
  );
};

const containerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
  borderRadius: '4px',
};

const textStyle = {
  color: '#333',
  fontSize: '15px',
};

export default ItemListContainer;