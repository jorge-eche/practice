import { useState } from "react";
import styles from "./CalculatorForm.module.css";

const CalculatorForm = ({ calculateHandler, resetFinalCalculation }) => {
  const [formData, setFormData] = useState({
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  });

  const inputChangeHandler = (input, value) => {
    setFormData((prevInput) => {
      return { ...prevInput, [input]: +value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.duration > 0) {
      calculateHandler(formData);
    }
  };

  const resetHandler = (event) => {
    const confirmReset = window.confirm("Do you want to reset the form?");

    if (confirmReset) {
      setFormData([]);
      resetFinalCalculation();
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={`${styles["input-group"]}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={`${styles["input-group"]}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
