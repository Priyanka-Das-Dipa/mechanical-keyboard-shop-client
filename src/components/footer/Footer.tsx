import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-300 py-8 dark:bg-gray-500 dark:text-white">
      <footer className="container mx-auto">
        <div className="flex flex-col md:flex-row py-16 md:gap-8 ps-10 md:pe-10 xl:px-0 md:justify-between">
          <div>
            <Link to="/">Logo</Link>

            <p className="text-[#1A1A1A] font-medium text-sm max-w-[430px] py-5">
            Sign up to our newsletter to receive exclusive offers.
            </p>
            <div className="flex space-x-5 ">
              
            </div>
          </div>
          <div className="py-5 md:py-0">
            <ul className="space-y-1">
              <li className="font-bold  text-lg text-[#1A1A1A]">Links</li>
              <Link to="/products">
                <li className="text-sm font-medium text-[#1A1A1A]">Products</li>
              </Link>
              <Link to="/about">
                <li className="text-sm font-medium text-[#1A1A1A]">About us</li>
              </Link>
              <Link to="/contact">
                <li className="text-sm font-medium text-[#1A1A1A]">
                  Contact us
                </li>
              </Link>
            </ul>
          </div>
          <div className="py-5 md:py-0">
            <ul>
              <li className="font-semibold  text-sm text-[#1A1A1A]">
                <h3>Links</h3>
              </li>
              <li className="text-sm font-medium text-[#1A1A1A]">
                Marketplace
              </li>
              <li className="text-sm font-medium text-[#1A1A1A]">Dashboard</li>
              <li className="text-sm font-medium text-[#1A1A1A]">Blog</li>
            </ul>
          </div>
          <div className="py-5 md:py-0">
            <ul>
              <li className="font-bold  text-sm text-[#1A1A1A]">Resources</li>
              <li className="text-sm font-medium text-[#1A1A1A]">Guides</li>
              <li className="text-sm font-medium text-[#1A1A1A]">
                Support center
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
