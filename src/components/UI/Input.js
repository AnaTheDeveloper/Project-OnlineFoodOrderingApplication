import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
            {/* We use the spread operator to ensure that all the key value pairs that come from the input object (which are recieved vis props.input) are added as props to input. */}
        </div>
    );
});
export default Input;