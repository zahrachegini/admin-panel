import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const CourseList = () => {
  const loadedCourses = useLoaderData();

  return (
    <>
      <div className="row">
        {loadedCourses.map((course) => (
          <div className="col-12 col-md-6 col-lg-3" key={course.id}>
            {console.log(course)}
            <Course {...course} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseList;
