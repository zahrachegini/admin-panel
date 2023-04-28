import logo from "@assets/images/logo.svg";

const Register = () => {
  return (
    <div className="main d-flex justify-content-center w-100">
      <main className="content d-flex p-0">
        <div className="container d-flex flex-column">
          <div className="row h-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <img src={logo} alt="logo" style={{ height: "100px" }} />
                  <h1 className="h2">پلتفرم آموزش آنلاین</h1>
                  <p className="lead">جهت ورود لازم است ثبت نام کنید.</p>
                  <p className="lead">
                    قبلا ثبت نام کرده اید؟
                    <a href="#" className="me-2">
                      وارد شوید
                    </a>
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
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            رمز عبور
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            تکرار رمز عبور
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="text-center mt-3">
                          <button className="btn btn-lg btn-primary">
                            ثبت نام کنید
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
