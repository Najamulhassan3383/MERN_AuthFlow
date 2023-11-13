import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "./Redux/Slices/UsersApiSlice";
import { clearCredentials } from "./Redux/Slices/AuthSlice";

function HomePage() {
  const { user } = useSelector((state) => state.auth);

  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("logout");
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="max-w-6xl mx-auto h-screen ">
      <nav className="flex justify-between items-center bg-gray-800 p-4">
        <div className="text-white font-bold text-xl">MERN AUTH</div>
        <div>
          {user && (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Profile
              </button>
            </>
          )}
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center h-full m-auto">
        <div className="text-3xl font-bold">Welcome to MERN AUTH</div>
        <div className="my-4">
          <button
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleLogout}
          >
            Log Out
          </button>
          {!user && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
