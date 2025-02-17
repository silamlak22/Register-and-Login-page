import react, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
const Login = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1 className="login-h1">Login</h1>
      <form className="form">
        <div className="container-2">
          <div className="email-password">
            <div className="inputs email">
              <span>
                <div className="lbl-mbtm">
                  <label className="lebel-btm">Email or Username: </label>
                </div>
                <input
                  type="text"
                  className="input-field email-field"
                  placeholder="Enter your Email or Username"
                />
              </span>
            </div>
            <div className="inputs password">
              <span>
                <div className="lbl-mbtm">
                  <label>Password: </label>
                </div>
                <input
                  type="password"
                  className="input-field pass-field "
                  value={password}
                  name="password"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
            </div>
          </div>
          <button type="submit" className="sub-btn">
            Login
          </button>
        </div>
      </form>
      <div className="forgot-register">
        <Link to="/forgotpass" className="forgot-link">
          Forgot Password?
        </Link>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
