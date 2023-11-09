import { useState } from "react";

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="max-w-6xl m-auto h-full bg-red-900">
      <nav className="flex justify-between items-center bg-gray-800 p-4">
        <div className="text-white font-bold text-xl">MERN AUTH</div>
        <div>
          {isLoggedIn ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleLogout}
              >
                Log Out
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Profile
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogin}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
