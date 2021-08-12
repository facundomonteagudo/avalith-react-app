/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import stl from './Switch.module.css';

const Switch = ({ isOn, onToggle }) => (
  <div className={stl.container}>
    <p className={stl.info}>{isOn ? 'Solo en Stock' : 'Todos los productos'}</p>
    <label className={stl.switch}>
      <input type="checkbox" onChange={onToggle} />
      <span className={stl.slider} />
    </label>
  </div>
);

export default Switch;
