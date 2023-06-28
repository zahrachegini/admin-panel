import { httpInterceptedServices } from "@core/http-service";
import CourseList from "../features/courses/components/CourseList";

const Courses = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between m-5">
          <a href="" className="btn btn-primary fw-bolder mt-n1">
            افزودن دوره جدید
          </a>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export async function coursesLoader() {
  const response = await httpInterceptedServices.get("/Course/list");
  return response.data;
}

export default Courses;
