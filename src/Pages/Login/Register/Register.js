import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    <Loading></Loading>;
  }

  const navigate = useNavigate();

  const navigateToSignIn = (event) => {
    navigate("/login");
  };
  const navigateToHome = (event) => {
    navigate("/home");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Profile Updated ");
    navigate("/home");
  };
  return (
    <div className="container register-form">
      <h4 style={{ textAlign: "center" }} className="text-danger text-center">
        Register Please
      </h4>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="name" placeholder="Your Name" />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your email Address"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          required
        />
        <br />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={`ms-2 ${agree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept terms and conditions
        </label>
        <input
          disabled={!agree}
          className="d-block mx-auto w-50 mb-3 btn btn-dark fw-bold mt-3"
          type="submit"
          value="Register"
        />
      </form>

      <p>
        {" "}
        Already have an account ?{" "}
        <Link to="/login" className="text-danger">
          {" "}
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Register;
