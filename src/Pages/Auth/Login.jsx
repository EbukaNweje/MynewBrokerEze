import "./Register.css";
import LoginImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Icon.jpeg";
import { CiMail } from "react-icons/ci";
import { FiKey } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const handleNavToDashboard = () => {
    nav("/dashboard");
  };

  return (
    <div className="RegisterBody">
      <div className="RegisterContainer">
        <div className="RegisterLeft">
          <div className="RegisterLeftWrapper">
            <div className="RegisterLeftImgDiv">
              <img src={SwiftLogo} alt="Swift Earn Logo" />
            </div>
            <div className="RegisterLeftInputsDiv">
              <h2>Welcome Back!</h2>
              <p>
                To keep you connected, please login with your personal info.
              </p>
              <div className="RegisterField">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <div className="RegisterFieldInput">
                  <span>
                    <CiMail />
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div className="RegisterField">
                <label htmlFor="password">
                  Password <span>*</span>
                </label>
                <div className="RegisterFieldInput">
                  <span>
                    <FiKey />
                  </span>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="LoginLeftControlDiv">
                <div className="LoginLeftControlDivRememberDiv">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link className="LoginForgotLink" to="/forgot-password">
                  Forgot password?
                </Link>
              </div>
              <button
                className="RegisterSubmitButton"
                onClick={handleNavToDashboard}
              >
                Sign in
              </button>
            </div>
            <div className="RegisterLeftInfo">
              <p>
                Don&#39;t have an account? <Link to="/register">Sign Up</Link>
              </p>
              <p>
                © {new Date().getFullYear()} Asset Development.. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="RegisterRight">
          <div className="RegisterRightCard">
            <div className="RegisterRightInfo">
              <h1>Secure access for every investor.</h1>
              <p>
                Sign in quickly with your credentials and continue trading with
                the tools you trust.
              </p>
            </div>
            <div className="RegisterCardImage">
              <img src={LoginImg} alt="Login illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
