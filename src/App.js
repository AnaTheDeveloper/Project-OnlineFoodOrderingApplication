import React from 'react';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react/cjs/react.production.min';



function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>

  );
}

export default App;
