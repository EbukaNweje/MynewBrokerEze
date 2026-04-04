import "./Register.css";
import RegisterImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Icon.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FiKey } from "react-icons/fi";

const Register = () => {
  const nav = useNavigate();

  const handleRegister = () => {
    nav("/login");
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
              <h2>Create account</h2>
              <p>
                Open your account today and start trading with a modern
                platform.
              </p>
              <div className="RegisterField">
                <label>
                  Email <span>*</span>
                </label>
                <div className="RegisterFieldInput">
                  <span>
                    <CiMail />
                  </span>
                  <input type="email" placeholder="name@example.com" />
                </div>
              </div>
              <div className="RegisterField">
                <label>
                  Password <span>*</span>
                </label>
                <div className="RegisterFieldInput">
                  <span>
                    <FiKey />
                  </span>
                  <input type="password" placeholder="Create password" />
                </div>
              </div>
              <div className="RegisterField">
                <label>
                  Confirm Password <span>*</span>
                </label>
                <div className="RegisterFieldInput">
                  <span>
                    <FiKey />
                  </span>
                  <input type="password" placeholder="Confirm password" />
                </div>
              </div>
              <button onClick={handleRegister}>Create account</button>
            </div>
            <div className="RegisterLeftInfo">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
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
              <h1>Trade with a modern broker experience.</h1>
              <p>
                Fast access to key markets and clean onboarding for traders who
                want a professional platform without the clutter.
              </p>
            </div>
            <div className="RegisterCardImage">
              <img src={RegisterImg} alt="Trading illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
