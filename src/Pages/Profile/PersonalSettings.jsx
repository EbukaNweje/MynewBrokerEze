import { useState } from "react";
import "./Profile.css";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";

const PersonalSettings = ({ data }) => {
  const [fullName, setFullName] = useState(data?.fullName || "");
  const [userName, setUserName] = useState(data?.userName || "");
  const [phoneNumber, setPhoneNumber] = useState(data?.phoneNumber || "");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: "",
  });

  const userinfo = { fullName, userName, phoneNumber };
  const updateuserurl = `https://omega-exchange-back-end-one.vercel.app/api/userdata/${data?._id}`;

  const upDateUser = () => {
    // Validation
    if (!fullName.trim() && !userName.trim() && !phoneNumber.trim()) {
      setModalConfig({
        type: "error",
        title: "No Changes",
        message: "Please make at least one change before updating.",
      });
      setShowModal(true);
      return;
    }

    setButtonDisabled(true);
    axios
      .patch(updateuserurl, userinfo)
      .then((res) => {
        setButtonDisabled(false);
        setModalConfig({
          type: "success",
          title: "Profile Updated",
          message:
            res.data.message || "Your profile has been updated successfully.",
        });
        setShowModal(true);

        // Reload after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        setButtonDisabled(false);
        console.error(error);
        setModalConfig({
          type: "error",
          title: "Update Failed",
          message:
            error.response?.data?.message ||
            "Failed to update profile. Please try again.",
        });
        setShowModal(true);
      });
  };

  return (
    <>
      <div className="ProfileSection">
        <h2>Personal Information</h2>

        <div className="ProfileForm">
          <div className="ProfileFormRow">
            <div className="ProfileFormGroup">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="ProfileFormGroup">
              <label>Email Address</label>
              <input
                type="email"
                value={data?.email || ""}
                readOnly
                disabled
                style={{ opacity: 0.6, cursor: "not-allowed" }}
              />
              <small
                style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
              >
                Email cannot be changed
              </small>
            </div>
          </div>

          <div className="ProfileFormRow">
            <div className="ProfileFormGroup">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="ProfileFormGroup">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="ProfileFormActions">
            <button
              onClick={upDateUser}
              disabled={isButtonDisabled}
              style={{
                opacity: isButtonDisabled ? 0.6 : 1,
                cursor: isButtonDisabled ? "not-allowed" : "pointer",
              }}
            >
              {isButtonDisabled ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
      />
    </>
  );
};

export default PersonalSettings;
