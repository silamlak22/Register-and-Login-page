// src/components/SignUp.js
import { Link } from "react-router-dom";
import react, { useState } from "react";
import "../styles/register.css";

const Register = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <h1 className="register-h1">Register</h1>
      <form className="form">
        <div className="container-2">
          <div className="email-pass-confirm">
            {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="input-group">
              <div className="name-section">
                <div className="fname">
                  <div className="lbl-mbtm">
                    <label>First & Middle Name:</label>
                  </div>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="your First & Middle Name"
                  />
                </div>
                <div className="lname">
                  <div className="lbl-mbtm">
                    <label>Last Name:</label>
                  </div>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="your last name"
                  />
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="input-group">
              <div className="name-section">
                <div className="fname">
                  <div className="lbl-mbtm">
                    <label>Email:</label>
                  </div>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="your email"
                  />
                </div>
                <div className="lname">
                  <div className="lbl-mbtm">
                    <label>Password:</label>
                  </div>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="your Password"
                    name="password"
                  />
                </div>
              </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="input-group">
              <div className="name-section">
                <div className="fname">
                  <div className="lbl-mbtm">
                    <label>Phone:</label>
                  </div>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="your Phone number"
                  />
                </div>
                <div className="lname">
                  <div className="lbl-mbtm">
                    <label>Gender:</label>
                  </div>
                  <select className="pull-down">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="input-group">
              <div className="name-section">
                <div className="fname">
                  <div className="lbl-mbtm">
                    <label>Age:</label>
                  </div>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="your Age"
                    min="0"
                  />
                </div>
                <div className="lname">
                  <div className="lbl-mbtm">
                    <label>Department:</label>
                  </div>

                  <select className="pull-down">
                    <option>Software Engineering</option>
                    <option>Computer Science</option>
                    <option>Information Technology</option>
                    <option>Information Science</option>
                  </select>
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="input-group">
              <div className="name-section">
                <div className="year">
                  <div className="lbl-mbtm">
                    <label>Year:</label>
                  </div>
                  <select className="pull-down">
                    <option>First Year</option>
                    <option>Second Year</option>
                    <option>Third Year</option>
                    <option>Forth Year</option>
                    <option>Fifth Year</option>
                  </select>
                </div>
                <div className="lname">
                  <div className="lbl-mbtm">
                    <label>Semister:</label>
                  </div>
                  <select className="pull-down pd-semister">
                    <option>I</option>
                    <option>II</option>
                  </select>
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
          </div>
          <button type="submit" className="sub-btn">
            Register
          </button>
        </div>
      </form>
      <div className="login">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
