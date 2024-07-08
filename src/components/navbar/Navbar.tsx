import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex max-w-7xl items-center justify-between px-2 py-2">
        <h2 className="text-2xl font-semibold dark:text-white">#NavigateUI</h2>
        <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
          <li className="hover:underline">
            <Link to="#">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="#">Services</Link>
          </li>
          <li className="hover:underline">
            <Link to="#">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
