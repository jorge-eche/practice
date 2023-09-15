import ReactDOM from "react-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";

const ModalOverlay = ({ closeModalHandler, errorMessage }) => {
  return (
    <div className={styles.modal}>
      <Card>
        <p className={styles.error_title}>Invalid Input</p>
        <p className={styles.error_message}>{errorMessage}</p>
        <div className={styles.div_button}>
          <Button type="button" onClick={closeModalHandler}>
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

const ErrorModal = ({ onModal, errorMessage }) => {
  const closeModalHandler = () => {
    onModal();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          onModal={onModal}
          errorMessage={errorMessage}
          closeModalHandler={closeModalHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default ErrorModal;
