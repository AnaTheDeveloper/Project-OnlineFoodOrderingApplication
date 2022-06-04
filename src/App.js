import React, {useState} from 'react';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {/* If this condition is met then show this component */}
      {cartIsShown && <Cart onCartHiddenVisibility={hideCartHandler}/>}
      {/* Pointing towards the methods above */}
      <Header onCartVisibility={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>

  );
}

export default App;
