import "./Register.css";
import LoginImg from "../../assets/Login-img.gif";
import SwiftLogo from "../../assets/Icon.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { FiKey } from "react-icons/fi";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate("/login");
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
              <h2>Reset password</h2>
              <p>
                Enter your new password below and confirm it to secure your
                account.
              </p>
              <div className="RegisterField">
                <label>
                  New password <span>*</span>
                </label>
                <div className="RegisterFieldInput">
                  <span>
                    <FiKey />
                  </span>
                  <input type="password" placeholder="New password" />
                </div>
              </div>
              <div className="RegisterField">
                <label>
                  Confirm password <span>*</span>
                </label>
                <div className="RegisterFieldInput">
                  <span>
                    <FiKey />
                  </span>
                  <input type="password" placeholder="Confirm password" />
                </div>
              </div>
              <button onClick={handleResetPassword}>Reset password</button>
            </div>
            <div className="RegisterLeftInfo">
              <p>
                Back to <Link to="/login">Sign in</Link>
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
              <h1>Secure your account again.</h1>
              <p>
                Choose a strong password and use the same recovery flow to
                continue investing with confidence.
              </p>
            </div>
            <div className="RegisterCardImage">
              <img src={LoginImg} alt="Reset password illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
