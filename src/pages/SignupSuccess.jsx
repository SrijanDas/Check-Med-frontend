import React from "react";
import { loadingSuccess } from "../store/actions/loadingActions";
import { useDispatch } from "react-redux";

function SignupSuccess() {
  const dispatch = useDispatch();

  dispatch(loadingSuccess());

  return (
    <div>
      Account Created Successfully. Open your email to activate your account and
      login. You can close this tab.
    </div>
  );
}

export default SignupSuccess;
