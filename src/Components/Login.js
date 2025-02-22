import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LANDING_BG_IMAGE, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleSubmit = () => {
    // Validate form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      //Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="login-container">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="login-in-form w-1/3 absolute py-8 px-16 my-24 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-3 w-full rounded bg-transparent border border-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="my-4 p-3 w-full rounded bg-transparent border border-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-3 w-full rounded bg-transparent border border-gray-500"
        />
        <p className="text-red-500 font-semibold text-lg py-2">
          {errorMessage}
        </p>
        <button
          onClick={handleSubmit}
          className="my-4 p-3 bg-red-700 w-full rounded-lg"
        >
          Submit
        </button>
        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
      <div className="bg-image">
        <img src={LANDING_BG_IMAGE} alt="bg_image" />
      </div>
    </div>
  );
};

export default Login;
