import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let location = useLocation();

  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  let errorMsg;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading || sending) {
    <Loading></Loading>;
  }

  if (error) {
    errorMsg = (
      <div>
        <p className="text-danger fw-bold">Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    signInWithEmailAndPassword(emailValue, passwordValue);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("PLease enter your email"
      );
    }
  };

  const navigateToRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="container w-50">
      <h1 className="text-success text-center">Please Login</h1>`
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          className="d-block mx-auto w-50 mb-3"
          variant="dark fw-bold"
          type="submit"
          onClick={handleSubmit}
        >
          Log In
        </Button>
        <p>
          New with Us? Please
          <span className="text-danger fw-bold " onClick={navigateToRegister}>
            Register Here
          </span>
        </p>
        <p>
          Forget Password? Click here to
          <span className="text-danger fw-bold " onClick={resetPassword}>
            Reset your password
          </span>
        </p>
        {errorMsg}
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Login;
