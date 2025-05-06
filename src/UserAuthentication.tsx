import { useState, FormEvent, ChangeEvent, useEffect } from "react";

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

  function submitUserForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("user", userData);
    localStorage.getItem("userData");
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [setUserData, userData]);

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
          {isSignUp ? "Go to login page" : "Go to signup page"}
        </button>
      </span>
    </div>
  );
};

export default UserAuthentication;
