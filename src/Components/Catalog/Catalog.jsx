import React from 'react';
import Product from './Product/Product';
import stl from './Catalog.module.css';
import productList from '../../Data/productList';

const Catalog = ({ showProducts }) => {
  const products = productList
    .filter((item) => item.stock || showProducts)
    .map((item) => <Product key={item.name + item.price} item={item} />);

  return (
    <section className={stl.products}>
      <div className={stl.card}>
        <ul>{products}</ul>
      </div>
    </section>
  );
};

export default Catalog;
