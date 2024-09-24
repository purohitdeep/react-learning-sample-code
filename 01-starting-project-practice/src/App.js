import React, { useState, userState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      console.log(uName, uAge);
      return [...prevState, { id: Math.random().toString(), name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
