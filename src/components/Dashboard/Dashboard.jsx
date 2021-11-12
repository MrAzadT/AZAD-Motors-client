import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex w-40 lg:w-64  min-h-screen">
      <nav className="w-40 lg:w-64 flex-shrink-0">
        <div className="flex-auto bg-gray-900 h-full">
          <div className="flex flex-col overflow-y-auto">
            <ul className="relative m-0 p-0 list-none h-full">
              <li className="text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700">
                Dashboard
              </li>

              <div className="text-blue-400 flex relative px-4  cursor-pointer">
                <div className="flex-auto my-1">
                  <Link to="/pay">
                    <span>Pay</span>
                  </Link>
                </div>
              </div>

              <div className="text-blue-400 flex relative px-4  cursor-pointer">
                <div className="flex-auto my-1">
                  <Link to="/myOrders">
                    <span>My Orders</span>
                  </Link>
                </div>
              </div>

              <div className="text-blue-400 flex relative px-4  cursor-pointer">
                <div className="flex-auto my-1">
                  <Link to="/review">
                    <span>Review</span>
                  </Link>
                </div>
              </div>

              <div className="text-blue-400 flex relative px-4  cursor-pointer">
                <div className="flex-auto my-1">
                  <Link to="/manageOrder">
                    <span>Manage All Orders</span>
                  </Link>
                </div>
              </div>
              <div className="text-blue-400 flex relative px-4  cursor-pointer">
                <div className="flex-auto my-1">
                  <Link to="/addProduct">
                    <span>Add A Product</span>
                  </Link>
                </div>
              </div>
              <div className="text-blue-400 flex relative px-4  cursor-pointer">
                <div className="flex-auto my-1">
                  <span>Make Admin</span>
                </div>
              </div>

              <div className="text-blue-400 flex relative px-4  cursor-pointer">
                <div className="flex-auto my-1">
                  <span>Logout</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
