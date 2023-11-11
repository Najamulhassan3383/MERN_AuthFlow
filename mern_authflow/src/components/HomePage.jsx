import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
                onClick={() => setOpen(!open)}
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
          <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
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
