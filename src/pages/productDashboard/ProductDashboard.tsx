import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../public/images/logo.png";
const ProductDashboard = () => {
  return (
    <div className="flex h-screen">
      <aside
        className="w-64 bg-gray-800 text-white"
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
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductDashboard;
