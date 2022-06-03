import React from 'react';
import styles from './Card.module.css';


const Card = (props) => {


    return (
        <React.Fragment>
            <div className={styles.card}>
                {/* Whatever is passed between the opening and closing tags of the card component is used inside of the card. */}
                {props.children}
            </div>
        </React.Fragment>
    );
};
export default Card;