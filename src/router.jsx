import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login/Login";
import Register, {
  registerAction,
} from "./features/identity/components/register/Register";
import IdentutyLayout from "./layoute/IdentityLayout";
import Courses, { coursesLoader } from "./pages/Courses";
import MainLayout from "./layoute/mainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader,
      },
    ],
  },
  {
    element: <IdentutyLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);
export default router;
