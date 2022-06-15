import styles from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const validationIsEmpty = value => value.trim() !== '';

const Checkout = (props) => {

    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameIsInvalid,
        valueHandler: nameHandler,
        inputBlurHandler: nameBlurHandler,
        resetInput: resetName,
    } = useInput(validationIsEmpty);

    const {
        value: enteredStreet,
        isValid: streetIsValid,
        hasError: streetIsInvalid,
        valueHandler: streetHandler,
        inputBlurHandler: streetBlurHandler,
        resetInput: resetStreet,
    } = useInput(validationIsEmpty);

    const {
        value: enteredCity,
        isValid: cityIsValid,
        hasError: cityIsInvalid,
        valueHandler: cityHandler,
        inputBlurHandler: cityBlurHandler,
        resetInput: resetCity,
    } = useInput(validationIsEmpty);

    const {
        value: enteredPostCode,
        isValid: postCodeIsValid,
        hasError: postCodeIsInvalid,
        valueHandler: postCodeHandler,
        inputBlurHandler: postCodeBlurHandler,
        resetInput: resetPostCode,
    } = useInput(validationIsEmpty);

    let checkoutIsValid = false;
    if (nameIsValid && streetIsValid && cityIsValid && postCodeIsValid) {
        checkoutIsValid = true;
    }

    const confirmOrderHandler = (event) => {

        event.preventDefault();

        if (!checkoutIsValid) {
            return ;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postcode: enteredPostCode,
        });

        resetName();
        resetStreet();
        resetCity();
        resetPostCode();
    };

    const nameValidOrInvalidStyle = `${styles.control} ${nameIsInvalid ? styles.invalid : ''}`;
    const streetValidOrInvalidStyle = `${styles.control} ${streetIsInvalid ? styles.invalid : ''}`
    const cityValidOrInvalidStyle = `${styles.control} ${cityIsInvalid ? styles.invalid : ''}`
    const postCodeValidOrInvalidStyle = `${styles.control} ${postCodeIsInvalid ? styles.invalid : ''}`

    return (
        <form onSubmit={confirmOrderHandler} className={styles.form}>
            <div className={styles.controlGroup}>
                <p className={styles.addressDetails}>Address:</p>

                <div className={nameValidOrInvalidStyle}>
                    <label htmlFor="name">Your Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    onChange={nameHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                    />
                    {nameIsInvalid && <p className={styles.invalidText}>Name must not be empty.</p>}
                </div>
                <div className={streetValidOrInvalidStyle}>
                    <label htmlFor="street">Street</label>
                    <input 
                    type="text" 
                    id="name" 
                    onChange={streetHandler}
                    onBlur={streetBlurHandler}
                    value={enteredStreet}
                    />
                    {streetIsInvalid && <p className={styles.invalidText}>Street must not be empty.</p>}
                </div>
                <div className={cityValidOrInvalidStyle}>
                    <label htmlFor="city">City</label>
                    <input 
                    type="text" 
                    id="name" 
                    onChange={cityHandler}
                    onBlur={cityBlurHandler}
                    value={enteredCity}
                    />
                    {cityIsInvalid && <p className={styles.invalidText}>City must not be empty.</p>}
                </div>
                <div className={postCodeValidOrInvalidStyle}>
                    <label htmlFor="postCode">Post Code</label>
                    <input 
                    type="text" 
                    id="name"
                    onChange={postCodeHandler}
                    onBlur={postCodeBlurHandler}
                    value={enteredPostCode} 
                    />
                    {postCodeIsInvalid && <p className={styles.invalidText}>Enter a valid postcode.</p>}

                </div>
                <div className={styles.actions}>
                    <button disabled={!checkoutIsValid} className={checkoutIsValid && styles.orderButton}>Place Order</button>
                    <button type="button" onClick={props.onCancel} className={styles.cancelButton}>Cancel</button>
                </div>
            </div>
        </form>
    );

};

export default Checkout;