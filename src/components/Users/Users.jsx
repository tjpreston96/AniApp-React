import React, { useEffect, useState } from "react";
import "./Users.css";
import userService from "../../services/userService";

const Users = ({ user }) => {
  const [users, setUsers] = useState([]);

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
        {users.map((user) => {
          return (
            <div className="card user">
              <div className="card-header">
                <p>
                  <b>{user.name}</b>
                </p>
              </div>
              <p>Email: {user.email}</p>
              <p>Joined: {user.createdAt.slice(0,10)}</p>
              <div className="card-footer">

              <button className="btn gold">friend button</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
