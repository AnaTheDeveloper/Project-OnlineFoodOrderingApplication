import React from 'react';
import styles from './MealsSummary.module.css';

const MealsSummary = () => {

    return (
        <React.Fragment>
            <section className={styles.summary}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                    Choose your favourite homecooked meal from our broad selction of menu items and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked fresh everyday with high-quality ingredients, just-in-time and most importantly
                    with love from some of the most experienced chefs!
                </p>
            </section>            
        </React.Fragment>
    );
};

export default MealsSummary;