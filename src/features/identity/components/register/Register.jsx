import { Link, useSubmit } from "react-router-dom";
import logo from "@assets/images/logo.png";
import { useForm } from "react-hook-form";
import { httpService } from "../../../../core/http-service";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = useSubmit();

  const onSubmit = (data) => {
    const { confirmPassword, ...userData } = data;
    submitForm(userData, { method: "post" });
  };

  return (
    <>
      <div className="text-center mt-4">
        <img
          src={logo}
          alt="logo"
          style={{ height: "80px", marginBottom: "15px" }}
        />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">جهت ورود لازم است ثبت نام کنید.</p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
          <Link to="/login" className="me-2">
            وارد شوید
          </Link>
        </p>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  موبایل
                </label>
                <input
                  {...register("mobile", {
                    required: "موبایل الزامی است",
                    minLength: 11,
                    maxLength: 11,
                  })}
                  type="text"
                  className={`form-control form-control-lg ${
                    errors.mobile && "is-invalid"
                  }`}
                />
                {errors.mobile && errors.mobile.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.mobile?.message}
                  </p>
                )}
                {errors.mobile &&
                  (errors.mobile.type === "minLength" ||
                    errors.mobile.type === "maxLength") && (
                    <p className="text-danger small fw-bolder mt-1">
                      موبایل باید 11 رقم باشد
                    </p>
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  رمز عبور
                </label>
                <input
                  {...register("password", {
                    required: "رمز عبور الزامی است",
                  })}
                  type="password"
                  className={`form-control form-control-lg ${
                    errors.password && "is-invalid"
                  }`}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  تکرار رمز عبور
                </label>
                <input
                  {...register("confirmPassword", {
                    required: "تکرار رمز عبور الزامی است",
                    validate: (value) => {
                      if (watch("password") !== value)
                        return "عدم تطابق با رمز وارد شده";
                    },
                  })}
                  type="password"
                  className={`form-control form-control-lg ${
                    errors.confirmPassword && "is-invalid"
                  }`}
                />
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "required" && (
                    <p className="text-danger small fw-bolder mt-1">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "validate" && (
                    <p className="text-danger small fw-bolder mt-1">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-lg btn-primary">ثبت نام کنید</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

export async function registerAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users", data);
  return response.status === 200;
}
