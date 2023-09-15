import { useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = ({ onUserUpdate, onErrorHandler, onModal }) => {
  const userName = useRef();
  const userAge = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.current.value.trim().length > 0 && userAge.current.value > 0) {
      const userObject = {
        username: userName.current.value,
        age: userAge.current.value,
      };
      onUserUpdate(userObject);
      userName.current.value = "";
      userAge.current.value = "";

      return;
    }

    if (
      !userName.current.value &&
      (!userAge.current.value || +userAge.current.value === 0)
    ) {
      onErrorHandler("Complete both Name and Age");
    } else if (userAge.current.value <= 0) {
      onErrorHandler("Age should be higher than 0");
    } else if (userName.current.value.trim() === "") {
      onErrorHandler("Complete username");
    }
    onModal();
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <div className={styles["input-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={userName} />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" ref={userAge} />
          </div>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
