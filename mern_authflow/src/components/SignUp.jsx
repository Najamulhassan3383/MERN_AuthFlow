import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useRegisterMutation } from "./Redux/Slices/UsersApiSlice";
import { setCredentials } from "./Redux/Slices/AuthSlice";
import { toast } from "react-toastify";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmission = async () => {
    try {
      const res = await register({ name, email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials(res));
      toast.success("Account Created Successfully");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          <h1 className="mb-8 text-3xl text-center">CREATE AN ACCOUNT</h1>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="name"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              NAME:
            </label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <BsFillPersonVcardFill className="h-6 w-6" />
              </div>

              <input
                id="name"
                type="name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label
              htmlFor="email"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              E-Mail Address:
            </label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>

              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="E-Mail Address"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label
              htmlFor="password"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Password:
            </label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>

              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="password"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Confirm Password:
            </label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <span>
                  <GiConfirmed className="h-6 w-6" />
                </span>
              </div>

              <input
                id="confirmPassword"
                type="confirmPassword"
                name="confirmPassword"
                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="confirmPassword"
              />
            </div>
          </div>

          <button
            onClick={handleSubmission}
            className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
          >
            Create Account
            <IoCreateOutline className="h-8 w-8 pl-2" />
          </button>

          <div className="text-center text-sm text-grey-300 mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-gra-800 text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-gray-500 ml-2 text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-gray-900 mt-6">
          Already have an account?
          <NavLink
            className="underline border-b border-blue text-blue-400 ml-2"
            to="/"
          >
            Log in
          </NavLink>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
