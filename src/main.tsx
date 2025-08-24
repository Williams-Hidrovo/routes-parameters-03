import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routerApp from "./app/routes";

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={routerApp} />
  </>
);
