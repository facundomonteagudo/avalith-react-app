import React, { useState } from 'react';
import Catalog from './Components/Catalog/Catalog';
import Header from './Components/Header/Header';

function App() {
  const [showAllProducts, setShowAllProducts] = useState(true);

  const toggleProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <div>
      <Header isShowingAll={showAllProducts} onToggleCLick={toggleProducts} />
      <Catalog showProducts={showAllProducts} />
    </div>
  );
}

export default App;
