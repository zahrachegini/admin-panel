import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login/Login";
import Register, {
  registerAction,
} from "./features/identity/components/register/Register";
import IdentutyLayout from "./layoute/IdentityLayout";
import Courses, { coursesLoader } from "./pages/Courses";
import MainLayout from "./layoute/mainLayout/MainLayout";
import CourseCategories, { categoriesLoader } from "./pages/CourseCategories";
import CourseDetailes, {
  courseDetailsLoader,
} from "./features/courses/components/CourseDetailes";
import { CategoryProvider } from "./features/categories/components/CategoryContext";
import NotFound from "./pages/NotFound";
import UnhandlesException from "./pages/UnhandlesException";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <UnhandlesException />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader,
      },
      {
        path: "course-categories",
        element: (
          <CategoryProvider>
            <CourseCategories />
          </CategoryProvider>
        ),
        loader: categoriesLoader,
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
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
