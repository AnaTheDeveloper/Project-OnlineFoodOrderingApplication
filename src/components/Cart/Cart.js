import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {

    const cartItems = <ul className={styles['cartItems']}>
        {[{id: 'c1', name: 'Pizza', amount: 2, price: 10.99}].map(item => 
        <li>{item.name}</li>
        )}
        </ul>;

    return (
        <Modal closeCartModel={props.cartClosed}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>23.89</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.button}>Order</button>
                <button className={styles['buttonAlt']} onClick={props.onCartHiddenVisibility}>
                    Close
                </button>
            </div>
        </Modal>
    );
};
export default Cart;