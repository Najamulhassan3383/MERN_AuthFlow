import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useSelector } from "react-redux";

function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="max-w-6xl m-auto h-full bg-red-900">
      <nav className="flex justify-between items-center bg-gray-800 p-4">
        <div className="text-white font-bold text-xl">MERN AUTH</div>
        <div>
          {user ? (
            <>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Log Out
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Profile
              </button>
            </>
          ) : (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
