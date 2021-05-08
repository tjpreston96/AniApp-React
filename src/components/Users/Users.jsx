import React, { useEffect, useState } from "react";
import "./Users.css";
import userService from "../../services/userService";

const Users = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [friends, setFriends] = useState([]);

  const handleSubmit = async (userID, type) => {
    let newUser;
    if (type === "add") {
      newUser = await userService.newFriend(userID);
    } else {
      newUser = await userService.removeFriend(userID);
    }
    setCurrentUser(newUser);
  };

  useEffect(() => {
    // IIFE - Immediately Invoked Function Expression
    (async () => {
      const allUsers = await userService.getAllUsers();
      setUsers(allUsers);
    })();
    setCurrentUser(user);
  }, [setUsers]);

  return (
    <div>
      <h1>Users</h1>
      <div className="userDiv">
        {users.map((u, idx) => {
          const uDateString = new Date(u.createdAt).toLocaleString();
          return (
            <div key={idx} className="card user">
              <div className="card-header">
                <p>
                  <b>{u.name}</b>
                </p>
              </div>
              <p>Email: {u.email}</p>
              <p>Joined: {uDateString}</p>
              {!user.friends.includes(u._id) || !friends.includes(u._id) ? (
                <button
                  className="btn gold"
                  onClick={() => handleSubmit(u._id, "add")}
                >
                  Add Friend
                </button>
              ) : (
                <button
                  className="btn pink"
                  onClick={() => handleSubmit(u._id, "remove")}
                >
                  Unfriend
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
