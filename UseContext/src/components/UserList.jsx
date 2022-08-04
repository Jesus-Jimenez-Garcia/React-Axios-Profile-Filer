import React, { useContext, useEffect } from "react";
import UserContext from "../context/User/UserContext";

const UsersList = () => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return (
    users.map(user => (
      <a href="" key={user.id}>{`${user.first_name} ${user.last_name}`}</a>
    ))
  )
};

export default UsersList;
