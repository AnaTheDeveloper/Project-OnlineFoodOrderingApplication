import React, { useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `£${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartContext.addItem(item);
    };

    const cartItems = (
    <ul className={styles['cartItems']}>
        {cartContext.items.map((item) => (
        <CartItem 
        key={item.id} 
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
        />
        ))}
    </ul>
    );

    return (
        <Modal closeCartModel={props.cartClosed}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <Checkout />
            <div className={styles.actions}>
                {hasItems && <button className={styles.button}>Order</button>}
                <button className={styles['buttonAlt']} onClick={props.onCartHiddenVisibility}>
                    Close
                </button>
            </div>
        </Modal>
    );
};
export default Cart;