import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { logout } from "../Firebase/firebaseFunctions";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const isAdmin = data.filter((user) => user.email === currentUser.email);

  console.log(isAdmin.length);

  useEffect(() => {
    axios
      .get(`https://limitless-temple-20432.herokuapp.com/admin`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex w-40 lg:w-64  min-h-screen">
      <nav className="w-40 lg:w-64 flex-shrink-0">
        <div className="flex-auto bg-gray-900 h-full">
          <div className="flex flex-col overflow-y-auto">
            <ul className="relative m-0 p-0 list-none h-full">
              <li className="text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700">
                Dashboard
              </li>

              {isAdmin.length > 0 && (
                <div className="text-blue-400 flex relative px-4  cursor-pointer">
                  <div className="flex-auto my-1">
                    <Link to="/admin">
                      <span>Admin Dashboard</span>
                    </Link>
                  </div>
                </div>
              )}

              {!isAdmin.length > 0 && (
                <div className="text-blue-400 flex relative px-4  cursor-pointer">
                  <div className="flex-auto my-1">
                    <Link to="/pay">
                      <span>Pay</span>
                    </Link>
                  </div>
                </div>
              )}
              {!isAdmin.length > 0 && (
                <div className="text-blue-400 flex relative px-4  cursor-pointer">
                  <div className="flex-auto my-1">
                    <Link to="/myOrders">
                      <span>My Orders</span>
                    </Link>
                  </div>
                </div>
              )}
              {!isAdmin.length > 0 && (
                <div className="text-blue-400 flex relative px-4  cursor-pointer">
                  <div className="flex-auto my-1">
                    <Link to="/review">
                      <span>Review</span>
                    </Link>
                  </div>
                </div>
              )}

              {!isAdmin.length > 0 && (
                <div className="text-blue-400 flex relative px-4  cursor-pointer">
                  <div className="flex-auto my-1">
                    {currentUser.email && (
                      <Link to="/" onClick={() => logout()}>
                        <span>Logout</span>
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
