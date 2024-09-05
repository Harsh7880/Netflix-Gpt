import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMesaage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const fullName = useRef("");
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      fullName.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInFrom) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: PHOTO_URL,
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
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInfrom = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src={BACKGROUND_IMAGE}
          alt="backgound"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-white w-3/12 absolute p-12 bg-black	 my-44 mx-auto to right-0 left-0 bg-opacity-85"
      >
        <h1 className="text-3xl py-4">
          {" "}
          {isSignInFrom ? "Sign In" : "Sign Up "}
        </h1>

        {!isSignInFrom && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="rounded w-full p-3 my-2 bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="rounded w-full p-3 my-2 bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded w-full p-3 my-2 bg-gray-700"
        />

        <p className="text-red-500 font-bold test-lg py-2">{errorMesaage}</p>
        <button
          onClick={handleButtonClick}
          className="w-full p-2 my-5  bg-red-700 rounded"
        >
          {isSignInFrom ? "Sign In" : "Sign Up "}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInfrom}>
          {isSignInFrom
            ? "New to Netflix? Sign up now"
            : "Already registred? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
