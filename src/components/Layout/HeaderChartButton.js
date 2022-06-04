import React from 'react';
import styles from './HeaderChartButton.module.css';
import CartIcon from '../Cart/CartIcon';


const HeaderChartButton = (props) => {

    
    return (
        <button className={styles.button} onClick={props.whenCartVisibilityIsClicked}> {/*We have passed down the pointer to this onClick function */}

            <span className={styles.icon}>
                <CartIcon/>
            </span>                  
            
            <span>Basket</span>

            <span className={styles.badge}>3</span>                    
                
        </button>
    );
};

export default HeaderChartButton;