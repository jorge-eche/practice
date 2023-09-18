import { useState } from "react";

const useInputState = (invalidCondition) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsInvalid = invalidCondition(enteredValue);
  const inputHasError = invalidCondition(enteredValue) && isTouched;

  let inputCssClasses = inputHasError ? "form-control invalid" : "form-control";

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isInvalid: valueIsInvalid,
    inputHasError,
    inputCssClasses,
    valueChangeHandler,
    valueBlurHandler,
  };
};

export default useInputState;
