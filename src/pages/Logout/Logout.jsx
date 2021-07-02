import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <div>
      <h1>You have logged out</h1>
    </div>
  );
}

export default Logout;
