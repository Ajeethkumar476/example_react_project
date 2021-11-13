import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {

  return (
    <React.Fragment>
      <div>
        <Link to="/">Home</Link> <br />
        <Link to="/users/user1">Users1</Link>
        <br />
        <Link to="/users/user2">Users2</Link>
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Users;
