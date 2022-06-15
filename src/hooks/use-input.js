import { useState} from "react";

const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);

    const hasError = !valueIsValid && isTouched;

    const valueHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const resetInput = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueHandler,
        inputBlurHandler,
        resetInput,
    }
}
export default useInput;