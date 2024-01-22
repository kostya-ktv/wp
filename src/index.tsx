import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutPageLazy, ShopPageLazy } from "@/components/pages";
import React from "react";

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
        element: (
          <React.Suspense fallback={<h1>Loading</h1>}>
            <AboutPageLazy />
          </React.Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <React.Suspense fallback={<h1>Loading</h1>}>
            <ShopPageLazy />
          </React.Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
