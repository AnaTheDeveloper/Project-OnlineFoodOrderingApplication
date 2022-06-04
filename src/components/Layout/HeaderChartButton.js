import React from 'react';
import styles from './HeaderChartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useState } from 'react/cjs/react.production.min';

const HeaderChartButton = (props) => {

    
    return (
        <React.Fragment>
            <button className={styles.button}>

                <span className={styles.icon}><CartIcon/></span>                  
            
                <span>Basket</span>

                <span className={styles.badge}>3</span>                    
                
            </button>
        </React.Fragment>
    );
};

export default HeaderChartButton;