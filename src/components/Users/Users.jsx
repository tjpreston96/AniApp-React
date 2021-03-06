import React, { useEffect, useState } from "react";
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

  return <div>Users Page</div>;
};

export default Users;
