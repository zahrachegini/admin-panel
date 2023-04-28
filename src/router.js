import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/Login";
import Register from "./features/identity/components/Register";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
export default router;
