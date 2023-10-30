import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Homepage } from "./HomePage";
export const Login = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [loginInput, setInput] = useState({
    name: " ",
    password: " ",
  });
  const validator = () => {
    let valid = false;
    let username = "";
    const check = JSON.parse(localStorage.getItem("user"));
    if (!check) {
      navigate("./errorPage");
      return valid;
    }
    check.map((users) => {
      if (
        users.name === loginInput.name &&
        users.password === loginInput.password
      ) {
        valid = true;
        username = users.name;
      }
      return true;
    });
    return { isAuth: valid, _username: username };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    let { isAuth, _username } = validator();
    if (isAuth) {
      navigate(`/marketPlace/${_username}`);
    } else {
      navigate("/errorPage");
    }
  };
  const handleChange = (event) => {
    setInput({ ...loginInput, [event.target.name]: event.target.value });
  };
  return (
    <div className="container my-5 d-flex flex-row justify-items-center align-content-center">
      <section className="register-block">
        <div className="container">
          <div className="row ">
            <div className="col register-sec">
              <h2 className="text-center">Login</h2>
              <form className="register-form" onSubmit={handleSubmit} action="">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPhonenumber1"
                    className="text-uppercase"
                  >
                    UserName
                  </label>
                  <input
                    className="form-control"
                    type="phonenumber"
                    placeholder="username"
                    name="name"
                    onChange={handleChange}
                    id=""
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-uppercase"
                  >
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    id=""
                  />
                </div>
                <div className="form-group">
                  {loading ? (
                    <div className="text-center">
                      <span
                        onClick={() => {
                          navigate("/register");
                        }}
                        className="text-danger"
                      >
                        {" "}
                        Kindly Register
                      </span>
                      <br />
                      <div
                        className="spinner-border text-primary "
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : null}
                  <input
                    type="submit"
                    className="btn btn-login float-right"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
