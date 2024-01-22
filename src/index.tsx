import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutPage } from "./components/pages/About.page";
import { ShopPage } from "./components/pages/Shop.page";

const root = document.getElementById("root");

if (!root) {
  throw Error("root required");
}
const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
