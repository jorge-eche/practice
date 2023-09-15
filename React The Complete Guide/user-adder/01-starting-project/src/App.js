import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const usersUpdate = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  const onModal = () => {
    setIsModal((prevState) => !prevState);
  };

  const onErrorHandler = (message) => {
    setErrorMessage(message);
  };

  return (
    <>
      <AddUser
        onUserUpdate={usersUpdate}
        onErrorHandler={onErrorHandler}
        onModal={onModal}
      />
      {users.length && <UsersList users={users} />}
      {isModal && <ErrorModal onModal={onModal} errorMessage={errorMessage} />}
    </>
  );
}

export default App;
