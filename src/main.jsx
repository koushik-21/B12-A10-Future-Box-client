import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { createBrowserRouter, } from "react-router";
// import { createBrowserRouter, RouterProvider } from "react-router/dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Layout/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Registration from "./components/Registration/Registration.jsx";
import AllProducts from "./components/AllProducts/AllProducts.jsx";
import MyExports from "./components/MyExports/MyExports.jsx";
import MyImports from "./components/MyImports/MyImports.jsx";
import AddExportRoutes from "./components/AddExportRoutes/AddExportRoutes.jsx";
import TermsOfUse from "./components/Footer/TermsOfUse.jsx";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      {
        path: "latestProduct/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        
        Component: ProductDetails,
      },
      // {
      //   path: "products/:id",
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/products/${params.id}`),
      //   Component: ProductDetails,
      // },
      { path: "register", Component: Registration },
      { path: "allProducts", Component: AllProducts },
      { path: "myExports", Component: MyExports },
      { path: "myImports", Component: MyImports },
      { path: "addExportRoutes", Component: AddExportRoutes },
      { path: "termsOfUse", Component: TermsOfUse },
      { path: "privacyPolicy", Component: PrivacyPolicy },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
