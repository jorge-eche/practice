import useInputState from "../hooks/use-input-state";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isInvalid: nameIsInvalid,
    inputHasError: nameHasError,
    inputCssClasses: nameClasses,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
  } = useInputState((value) => value.trim() === "");

  const {
    value: enteredLastName,
    isInvalid: lastNameIsInvalid,
    inputHasError: lastNameHasError,
    inputCssClasses: lastNameClasses,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
  } = useInputState((value) => value.trim() === "");

  const {
    value: enteredEmail,
    isInvalid: emailIsInvalid,
    inputHasError: emailHasError,
    inputCssClasses: emailClasses,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInputState((value) => !value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (nameIsInvalid || lastNameIsInvalid || emailIsInvalid) return;
    console.log({
      enteredName,
      enteredLastName,
      enteredEmail,
    });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="error-text">Please enter a valid name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a valid last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
