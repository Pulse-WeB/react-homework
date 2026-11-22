import styles from "./UserProfile.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState(null);
  async function fetchUser() {
    const response = await axios.get("https://randomuser.me/api/");
    setUser(response.data.results[0]);
  }
  useEffect(() => {
    fetchUser();
  }, []);
  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={user.picture.large}
        alt={user.name.first}
      />
      <h2>
        Name: {user.name.first} {user.name.last}
      </h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Country: {user.location.country}</p>
      <button
        className={styles.button}
        onClick={() => {
          fetchUser();
        }}
      >
        Get New User
      </button>
    </div>
  );
}

export default UserProfile;
