import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGPTSeachView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(()=>{
    }).catch((error)=>{
     navigate("/error");
    })
  }

  const handleGPTSearchToggle = (e) =>{
       dispatch (toggleGPTSeachView(e.target.value));
  } 

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO} alt="logo" />

        {user && (
          <div className="p-2 flex">
            <select
              onChange={handleLanguageChange}
              className="py-0 px-6 m-2 outline-0 rounded"
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleGPTSearchToggle}
              className="text-black bg-teal-300 px-6 rounded m-2 mr-4 cursor-pointer"
            >
              GPT Search
            </button>

            <img
              className="w-12 h-12 m-1 rounded"
              alt="user-icon"
              src={user.photoURL}
            />

            <button
              onClick={handleSignOut}
              className="font-bold text-white cursor-pointer"
            >
              (Sign Out){" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
