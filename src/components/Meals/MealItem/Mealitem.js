import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const price = `£${props.price.toFixed(2)}`;

    return (
        <React.Fragment>
            <li className={styles.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={styles.description}>{props.description}</div>
                    <div className={styles.price}>{price}</div>
                </div>
                {/* Holds Number of items and basket */}
                <div>
                    <MealItemForm id={props.id}/>
                </div>
            </li>
        </React.Fragment>
    );
};

export default MealItem;