import React from "react";
import google from "../../../images/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";
import fb from "../../../images/facebook.png";
import gh from "../../../images/gh.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithGithub } from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorMsg;

  if (loading || loading1) {
    <Loading></Loading>;
  }

  if (error || error1) {
    errorMsg = (
      <p className="text-danger fw-bold">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    return navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center  ">
        <div style={{ height: "2px" }} className="bg-primary w-50 "></div>
        <p className="fw-bold mt-2 px-2 "> Or </p>
        <div style={{ height: "2px" }} className="bg-primary w-50 "></div>
      </div>
      {errorMsg}
      <div>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
          className="btn btn-dark w-50 d-block mx-auto my-2"
        >
          <img
            style={({ height: "32px" }, { width: "32px" })}
            src={google}
            alt=""
          />
          <span className="px-2 fw-bold"> Google Sign In</span>
        </button>
        <button className="btn btn-dark w-50 d-block mx-auto my-2">
          <img
            style={({ height: "32px" }, { width: "32px" })}
            src={fb}
            alt=""
          />
          <span className="px-2 fw-bold"> Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark w-50 d-block mx-auto my-2"
        >
          <img
            style={({ height: "32px" }, { width: "32px" })}
            src={gh}
            alt=""
          />
          <span className="px-2 fw-bold"> Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
