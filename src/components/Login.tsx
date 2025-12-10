import { useRef, useState } from "react";
import Header from "./Header";
import filmikeLoginBg from "/bg-filmik.jpeg";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationErrorMessage, setValidationErrorMessage] = useState<{
    email?: string;
    password?: string;
    name?: string;
  } | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const name = useRef<HTMLInputElement | null>(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const validationMessage = checkValidData(
      email?.current?.value ?? "",
      password?.current?.value ?? "",
      name?.current?.value ?? ""
    );

    setValidationErrorMessage(validationMessage);
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <div className="absolute w-full h-screen bg-black/25 "></div>
        <img
          className="h-screen"
          src={filmikeLoginBg}
          alt="Filmike Background"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        className="bg-black/60 text-sm  p-12 text-white absolute w-3/12 z-10 mx-auto my-64 right-0 left-0 flex flex-col justify-center rounded-md"
      >
        <p className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <>
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-4 my-4 bg-gray-700 w-full rounded-md"
            />
            <p className="text-red-500 text-sm ">
              {validationErrorMessage?.name}
            </p>
          </>
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="p-4 my-4 bg-gray-700 w-full rounded-md"
        />
        <p className="text-red-500 text-sm ">{validationErrorMessage?.email}</p>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full rounded-md"
        />
        <p className="text-red-500 text-sm ">
          {validationErrorMessage?.password}
        </p>
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-4 bg-gray-700 w-full rounded-md"
          />
        )}

        <button
          className="p-4 my-4 w-full rounded-md bg-primary cursor-pointer font-semibold"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white/50 h-full">
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
