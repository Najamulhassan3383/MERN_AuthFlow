import React from "react";

const LoginForm = () => {
  return (
    <form className="form_container bg-white p-8 rounded-lg shadow-xl flex flex-col items-center gap-4">
      <div className="logo_container w-20 h-20 bg-gradient-to-b from-transparent to-gray-200 border border-gray-200 rounded-lg shadow-sm"></div>
      <div className="title_container flex flex-col items-center gap-2">
        <p className="title text-xl font-bold text-gray-700">
          Login to your Account
        </p>
        <span className="subtitle text-sm text-gray-600 max-w-[80%] text-center">
          Get started with our app, just create an account and enjoy the
          experience.
        </span>
      </div>
      <div className="input_container w-full relative flex flex-col gap-1">
        <label
          className="input_label text-xs text-gray-600 font-semibold"
          htmlFor="email_field"
        >
          Email
        </label>
        <svg
          className="icon w-5 h-5 absolute left-3 bottom-3 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="currentColor"
            d="M19 14v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2M5 12h14"
          />
        </svg>
        <input
          placeholder="name@mail.com"
          title="Input title"
          name="input-name"
          type="text"
          className="input_field w-full h-10 px-10 border border-gray-300 rounded-md outline-none transition duration-300 focus:ring-2 focus:ring-blue-500"
          id="email_field"
        />
      </div>
      <div className="input_container w-full relative flex flex-col gap-1">
        <label
          className="input_label text-xs text-gray-600 font-semibold"
          htmlFor="password_field"
        >
          Password
        </label>
        <svg
          className="icon w-5 h-5 absolute left-3 bottom-3 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="currentColor"
            d="M19 14v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2M5 12h14"
          />
        </svg>
        <input
          placeholder="Password"
          title="Input title"
          name="input-name"
          type="password"
          className="input_field w-full h-10 px-10 border border-gray-300 rounded-md outline-none transition duration-300 focus:ring-2 focus:ring-blue-500"
          id="password_field"
        />
      </div>
      <button
        title="Sign In"
        type="submit"
        className="sign-in_btn w-full h-10 bg-blue-500 text-white rounded-md outline-none cursor-pointer transition duration-300 hover:bg-blue-600"
      >
        Sign In
      </button>
      <div className="separator w-full flex items-center gap-8 text-gray-600">
        <hr className="line w-full border-t" />
        <span>Or</span>
        <hr className="line w-full border-t" />
      </div>
      <button
        title="Sign In"
        type="submit"
        className="sign-in_ggl w-full h-10 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md outline-none cursor-pointer transition duration-300 hover:border-blue-500"
      >
        {/* Google Sign In Icon */}
        <span>Sign In with Google</span>
      </button>
      <button
        title="Sign In"
        type="submit"
        className="sign-in_apl w-full h-10 flex items-center justify-center gap-2 bg-gray-800 text-white border border-gray-300 rounded-md outline-none cursor-pointer transition duration-300 hover:border-blue-500"
      >
        {/* Apple Sign In Icon */}
        <span>Sign In with Apple</span>
      </button>
      <p className="note text-xs text-gray-600 underline">
        Terms of use & Conditions
      </p>
    </form>
  );
};

export default LoginForm;
