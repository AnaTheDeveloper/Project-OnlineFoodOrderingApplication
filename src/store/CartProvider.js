import CardContext from "./CartContext";

const CartProvider = (props) => {

    const addItemToCartHandler = (item) => {};

    const removeItemFromCartHandler = (id) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CardContext.Provider value={cartContext}>
            {props.children}
        </CardContext.Provider>
    );
};

export default CartProvider;

//The goal of this component is to manage the current context of data and provide that context to all the components that want to access it.

//The props.children allows us to wrap any component that has to get access to this context with this cart provider component. 