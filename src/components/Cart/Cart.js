import React, { useContext, useState } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {

    const [isCheckout, setIsCheckout] = useState(false);

    const cartContext = useContext(CartContext);

    const totalAmount = `£${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartContext.addItem(item);
    };

    const orderhandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = (userData) => {
        fetch('https://react-food-ordering-app-9d7a9-default-rtdb.firebaseio.com/orders.json', {
            method:'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartContext.items
            })
        });
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

    const modalButtonVisibilityToggle = 
    <div className={styles.actions}>
        {hasItems && <button className={styles.orderButton} onClick={orderhandler}>Order</button>}
        <button className={styles.closeButton} onClick={props.onCartHiddenVisibility}>
        Close
        </button>
    </div>

    return (
        <Modal closeCartModel={props.cartClosed}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onCartHiddenVisibility} onConfirm={submitOrderHandler}/>}
            {!isCheckout && modalButtonVisibilityToggle}
            
        </Modal>
    );
};
export default Cart;