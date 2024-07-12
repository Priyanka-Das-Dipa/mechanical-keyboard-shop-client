import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
const ProductDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white md:relative md:w-64 md:bg-gray-800 md:text-white md:shadow-md transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(315deg, rgba(240, 240, 240, 0.25), rgba(0, 0, 0, 1) 100%)",
        }}
      >
        <nav className="p-4">
          <Link to="/">
            <img src={logo} className="w-40" alt="" />
          </Link>
          <ul className="pl-5 pt-8">
            <li className="mb-6">
              <NavLink
                to="/product-Management/add-product"
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-4 border-white pb-1"
                    : "text-white"
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/product-Management/product-list"
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-4 border-white pb-1"
                    : "text-white"
                }
              >
                Product List
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 p-6  bg-[#f0f0f0]">
        {/* Menu icon for mobile and tablet */}
        <div className="md:hidden flex justify-between items-center">
          <div className="scale-100 cursor-pointer rounded-2xl py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            {/* <Link to="/">
              <img src={logo} width={80} alt="" />
            </Link> */}
          </div>
          <IoMdMenu
            className="text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductDashboard;
