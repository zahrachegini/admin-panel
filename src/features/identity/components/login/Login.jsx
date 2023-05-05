import { Link } from "react-router-dom";
import logo from "@assets/images/logo.png";

const Login = () => {
  return (
    <>
      <div className="text-center mt-4">
        <img
          src={logo}
          alt="logo"
          style={{ height: "80px", marginBottom: "15px" }}
        />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید.
        </p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
          <Link to="/register" className="me-2">
            ثبت نام کنید
          </Link>
        </p>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form action="">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  موبایل
                </label>
                <input type="text" className="form-control form-control-lg" />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  رمز عبور
                </label>
                <input type="text" className="form-control form-control-lg" />
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-lg btn-primary">وارد شوید</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;