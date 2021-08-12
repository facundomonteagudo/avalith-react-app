/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import stl from './Header.module.css';
import Switch from './Switch/Switch';

const Header = ({ isShowingAll, onToggleCLick }) => (
  <header className={stl.header}>
    <h1>
      Avalith Skill factory - <em> Monteagudo</em>, Facundo
    </h1>
    <Switch isOn={!isShowingAll} onToggle={onToggleCLick} />
  </header>
);

export default Header;
