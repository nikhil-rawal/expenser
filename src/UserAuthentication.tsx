import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { auth } from "./firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
interface userData {
  name?: string;
  email: string;
  password: string;
}
const UserAuthentication = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [userData, setUserData] = useState<userData>({
    name: "",
    email: "",
    password: "",
  });

  function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function signUpUser(): Promise<void> {
    try {
      const signedUpUserCredentials = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const signedUpUser = signedUpUserCredentials.user;
      console.log("signed up user", signedUpUser);
    } catch (error: unknown) {
      console.error("Error is - ", error);
    }
  }

  async function signInUser(): Promise<void> {
    try {
      const signedInUserCredentials = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const signedInUser = signedInUserCredentials.user;
      console.log("signed in user - ", signedInUser);
    } catch (error: unknown) {
      console.log("Error is - ", error);
    }
  }

  function submitUserForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSignUp) {
      signUpUser();
    } else {
      signInUser();
    }
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <div>
      <h2>{isSignUp ? "Sign Up Here" : "Please Login"}</h2>
      <form onSubmit={submitUserForm}>
        {isSignUp && (
          <input
            type="text"
            name="name"
            value={userData.name}
            placeholder="name"
            onChange={handleValueChange}
          />
        )}
        <br />
        <input
          type="email"
          name="email"
          value={userData.email}
          placeholder="email"
          onChange={handleValueChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="password"
          onChange={handleValueChange}
        />
        <br />
        <button type="submit">Click to Submit</button>
      </form>
      <span>
        {isSignUp ? "Already a member ?" : "New Here ?"}
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Go to login page !" : "Go to signup page !"}
        </button>
      </span>
    </div>
  );
};

export default UserAuthentication;

// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
