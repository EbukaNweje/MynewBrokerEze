import "./Register.css";
import LoginImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Icon.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSendReset = () => {
    navigate("/reset-password");
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
              <h2>Forgot password?</h2>
              <p>
                Enter your email address below and we’ll send you instructions
                to reset your password.
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
              <button onClick={handleSendReset}>Send reset link</button>
            </div>
            <div className="RegisterLeftInfo">
              <p>
                Remembered your password? <Link to="/login">Sign in</Link>
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
              <h1>Reset your account password.</h1>
              <p>
                We’ll email a secure link so you can create a new password and
                get back to trading quickly.
              </p>
            </div>
            <div className="RegisterCardImage">
              <img src={LoginImg} alt="Forgot password illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
