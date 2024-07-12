import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkout/CheckOut";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import App from "../App";
import ProductDashboard from "../pages/productDashboard/ProductDashboard";
import AddProduct from "../pages/addProduct/AddProduct";
import ProductList from "../pages/productList/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/product-Management",
    element: <ProductDashboard />,
    children: [
      {
        index: true,
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "product-list",
        element: <ProductList />,
      },
    ],
  },
]);
