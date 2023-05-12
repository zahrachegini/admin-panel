import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login/Login";
import Register, {
  registerAction,
} from "./features/identity/components/register/Register";
import IdentutyLayout from "./layoute/IdentityLayout";

const router = createBrowserRouter([
  {
    element: <IdentutyLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />
      },
    ],
  },
]);
export default router;
