import React, {useContext} from 'react';
import styles from './HeaderChartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CardContext from '../../store/CartContext';

const HeaderChartButton = (props) => {

    const useCartContext = useContext(CardContext);

    const numberOfCartItems = useCartContext.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return (
        <button className={styles.button} onClick={props.whenCartVisibilityIsClicked}> {/*We have passed down the pointer to this onClick function */}

            <span className={styles.icon}>
                <CartIcon/>
            </span>                  
            
            <span>Basket</span>

            <span className={styles.badge}>{numberOfCartItems}</span>                    
                
        </button>
    );
};

export default HeaderChartButton;