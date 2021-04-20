import React, { useEffect, useState } from "react";
import "./Users.css";
import userService from "../../services/userService";

const Users = ({ user }) => {
  const [users, setUsers] = useState([]);
  const currentUser = user;

  useEffect(() => {
    // IIFE - Immediately Invoked Function Expression
    (async () => {
      const allUsers = await userService.getAllUsers();
      setUsers(allUsers);
    })();
  }, [setUsers]);

  return (
    <div>
      <h1>Users</h1>
      <div className="userDiv">
        {users.map((u, idx) => {
          return (
            <div key={idx} className="card user">
              <div className="card-header">
                <p>
                  <b>{u.name}</b>
                </p>
              </div>
              <p>Email: {u.email}</p>
              <p>Joined: {u.createdAt.slice(0, 10)}</p>
              {!currentUser.friends.includes(u._id) ? (
                <button
                  className="btn gold"
                  onClick={() => userService.newFriend(u._id)}
                >
                  Add Friend
                </button>
              ) : (
                <button
                  className="btn gold"
                  onClick={() => userService.removeFriend(u._id)}
                >
                  Unfriend
                </button>
              )}
              {/* <button className="btn gold">friend button</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
