import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login/Login";
import Register, {
  registerAction,
} from "./features/identity/components/register/Register";
import IdentutyLayout from "./layoute/IdentityLayout";
import Courses, { coursesLoader } from "./pages/Courses";
import MainLayout from "./layoute/mainLayout/MainLayout";
import CourseCategories from "./pages/CourseCategories";
import CourseDetailes, {
  courseDetailsLoader,
} from "./features/courses/components/CourseDetailes";

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
      {
        path: "course-categories",
        element: <CourseCategories />,
      },
      {
        path: "courses/:id",
        element: <CourseDetailes />,
        loader: courseDetailsLoader,
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
