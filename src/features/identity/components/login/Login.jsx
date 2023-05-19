import { Link, useNavigation } from "react-router-dom";
import logo from "@assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  const { t } = useTranslation();

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  return (
    <>
      <div className="text-center mt-4">
        <img
          src={logo}
          alt="logo"
          style={{ height: "80px", marginBottom: "15px" }}
        />
        <h1 className="h2">{t("login.title")}</h1>
        <p className="lead">{t("login.introMessage")}</p>
        <p className="lead">
          {t("login.areNotRegistered")}
          <Link to="/register" className="mx-2">
            {t("login.register")}
          </Link>
        </p>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">{t("login.mobile")}</label>
                <input
                  {...register("mobile", {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                  })}
                  className={`form-control form-control-lg ${
                    errors.mobile && "is-invalid"
                  }`}
                />
                {errors.mobile && errors.mobile.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {t("login.validation.mobileRequired")}
                  </p>
                )}
                {errors.mobile &&
                  (errors.mobile.type === "minLength" ||
                    errors.mobile.type === "maxLength") && (
                    <p className="text-danger small fw-bolder mt-1">
                      {t("login.validation.mobileLength")}
                    </p>
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  {t("login.password")}
                </label>
                <input
                  {...register("password", { required: true })}
                  className={`form-control form-control-lg ${
                    errors.password && "is-invalid"
                  }`}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {t("login.validation.passwordRequired")}
                  </p>
                )}
              </div>
              <div className="text-center mt-3">
                <button
                  className="btn btn-lg btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("login.signingin") : t("login.signin")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
