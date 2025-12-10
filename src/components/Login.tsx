import { useState } from "react";
import Header from "./Header";
import filmikeLoginBg from "/bg-filmike.png";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <div className="absolute w-full h-screen bg-black/50 "></div>
        <img
          className="h-screen"
          src={filmikeLoginBg}
          alt="Filmike Background"
        />
      </div>

      <form
        action=""
        className="bg-black/60 text-sm  p-10 text-white absolute w-1/4 z-10 mx-auto my-64 right-0 left-0 flex flex-col justify-center rounded-md"
      >
        <p className="text-3xl font-bold my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 bg-gray-700 w-full rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full rounded-md"
        />

        <button className="p-4 my-4 w-full rounded-md bg-primary cursor-pointer">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white/50 ">
          {isSignIn ? "New to Filmike?" : "Already have an account?"}{" "}
          <span
            className="text-white cursor-pointer font-bold"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign Up" : "Sign In"} now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
