import React, {useContext, useEffect, useState} from 'react';
import styles from './HeaderChartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

const HeaderChartButton = (props) => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const useCartContext = useContext(CartContext);

    const { items } = useCartContext;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const buttonClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
      if (items.length === 0) {
        return;
      }
      setBtnIsHighlighted(true);
  
      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);
  
      return () => {
        clearTimeout(timer);
      };
    }, [items]);

    return (
        <button className={buttonClasses} onClick={props.whenCartVisibilityIsClicked}> {/*We have passed down the pointer to this onClick function */}

            <span className={styles.icon}>
                <CartIcon/>
            </span>                  
            
            <span>Basket</span>

            <span className={styles.badge}>{numberOfCartItems}</span>                    
                
        </button>
    );
};

export default HeaderChartButton;