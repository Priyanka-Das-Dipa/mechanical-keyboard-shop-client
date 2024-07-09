import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/images/logo-removebg-preview.png";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const routes = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/products",
      pathName: "Products",
    },
    {
      path: "/cart",
      pathName: "Cart",
    },
    {
      path: "/checkout",
      pathName: "Checkout",
    },
    {
      path: "/productManagement",
      pathName: "Product Management",
    },
    {
      path: "/about",
      pathName: "About Us",
    },
    {
      path: "/contact",
      pathName: "Contact Us",
    },
  ];
  return (
    <div className=" bg-[#393E46]">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between  px-4 py-2 text-white mb-24">
          <div className="scale-100 cursor-pointer rounded-2xl py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            <Link to="/">
              <img src={logo} className="text-white" width={80} alt="" />
            </Link>
          </div>
          <div>
            <ul className="hidden items-center justify-between gap-10 lg:flex">
              {routes.map((route, index) => (
                <Link key={index} to={route.path}>
                  <li className="group flex  cursor-pointer flex-col">
                    {route.pathName}
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="relative mx-auto  p-2 rounded-md w-fit h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="absolute -right-2 -top-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500 text-center text-[12px] text-white ">
                12
              </span>
            </div>
          </div>
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                {routes.map((route, index) => (
                  <Link key={index} to={route.path}>
                    <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-gray-300">
                      {route.pathName}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
