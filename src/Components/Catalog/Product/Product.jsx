/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import stl from './Products.module.css';

const Product = ({ item }) => {
  // eslint-disable-next-line object-curly-newline
  const { name, price, description, stock } = item;

  return (
    <li className={stl.item}>
      <div className={stl.info}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={stl.price}>Precio : {price} $</div>
      </div>
      <div>
        <div className={stock ? stl.inStock : stl.outStock}>
          {stock ? <p>En Stock</p> : <p>Fuera de Stock</p>}
        </div>
      </div>
    </li>
  );
};

export default Product;
