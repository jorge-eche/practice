import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card>
      <ul>
        {users.map((user) => (
          <li key={Math.random() + Math.random()} className={styles.user}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
