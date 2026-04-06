import "./TransferFunds.css";
import { IoWalletOutline } from "react-icons/io5";
import { FaExchangeAlt, FaUser, FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";

const Transfer = () => {
  const { id } = useParams();
  const userData = useSelector((state) => state.persisitedReducer.user);

  console.log("Transfer component loaded", { id, userData });

  const [recipientEmail, setRecipientEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [recipientEmailError, setRecipientEmailError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "success",
    title: "",
    message: "",
  });

  const transferChargePercent = 0; // 0% transfer charge
  const transferCharge =
    (parseFloat(amount) || 0) * (transferChargePercent / 100);
  const totalAmount = (parseFloat(amount) || 0) + transferCharge;

  const handleRecipientEmail = (e) => {
    const value = e.target.value;
    setRecipientEmail(value);

    if (value.trim() === "") {
      setRecipientEmailError("Recipient email or username is required");
    } else {
      setRecipientEmailError("");
    }
  };

  const handleAmount = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (value.trim() === "" || value === "0" || value === "0.00") {
      setAmountError("Amount is required");
    } else if (parseFloat(value) <= 0) {
      setAmountError("Amount must be greater than 0");
    } else if (parseFloat(value) > parseFloat(userData?.accountBalance || 0)) {
      setAmountError("Insufficient balance");
    } else {
      setAmountError("");
    }
  };

  const handleTransfer = () => {
    // Validation
    if (!recipientEmail.trim()) {
      setRecipientEmailError("Recipient email or username is required");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setAmountError("Please enter a valid amount");
      return;
    }

    if (parseFloat(amount) > parseFloat(userData?.accountBalance || 0)) {
      setAmountError("Insufficient balance");
      return;
    }

    // Check if trying to transfer to self
    if (
      recipientEmail.toLowerCase() === userData?.email?.toLowerCase() ||
      recipientEmail.toLowerCase() === userData?.username?.toLowerCase()
    ) {
      setModalConfig({
        type: "error",
        title: "Invalid Transfer",
        message: "You cannot transfer funds to yourself.",
      });
      setShowModal(true);
      return;
    }

    const url = `https://mynew-broker-eze-back-end.vercel.app/api/transferfunds/${id}`;
    const data = {
      recipientEmail: recipientEmail,
      amount: parseFloat(amount),
      transferCharge: transferCharge,
    };

    setIsLoading(true);
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setModalConfig({
          type: "success",
          title: "Transfer Successful",
          message:
            res.data.message ||
            `Successfully transferred $${amount} to ${recipientEmail}`,
        });
        setShowModal(true);

        // Reset form after 2 seconds
        setTimeout(() => {
          setRecipientEmail("");
          setAmount("");
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setModalConfig({
          type: "error",
          title: "Transfer Failed",
          message:
            err.response?.data?.message ||
            "Transfer failed. Please check the recipient details and try again.",
        });
        setShowModal(true);
      });
  };

  const handleReset = () => {
    setRecipientEmail("");
    setAmount("");
    setRecipientEmailError("");
    setAmountError("");
  };

  return (
    <>
      <div className="TransferFundsBody">
        <h1>Funds Transfer</h1>
        <div className="TransferFundsContent">
          {/* Left Section - Transfer Form */}
          <div className="TransferFundsLeft">
            <div className="TransferBalanceCard">
              <div className="TransferBalanceIcon">
                <IoWalletOutline />
              </div>
              <div className="TransferBalanceInfo">
                <h3>
                  $
                  {(parseFloat(userData?.accountBalance) || 0).toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                  )}
                </h3>
                <p>Your Account Balance</p>
              </div>
            </div>

            <div className="TransferForm">
              <div className="TransferFormGroup">
                <label>
                  <FaUser /> Recipient Email or Username <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter recipient's email or username"
                  value={recipientEmail}
                  onChange={handleRecipientEmail}
                />
                {recipientEmailError && (
                  <p className="error">{recipientEmailError}</p>
                )}
              </div>

              <div className="TransferFormGroup">
                <label>
                  <FaDollarSign /> Amount <span>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter the amount you want to transfer"
                  value={amount}
                  onChange={handleAmount}
                  min="0"
                  step="0.01"
                />
                {amountError && <p className="error">{amountError}</p>}
                <p className="info-text">
                  Available Balance: $
                  {(parseFloat(userData?.accountBalance) || 0).toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                  )}
                </p>
              </div>

              <div className="TransferChargeInfo">
                <div className="ChargeItem">
                  <span>Transfer Amount:</span>
                  <strong>${parseFloat(amount || 0).toFixed(2)}</strong>
                </div>
                <div className="ChargeItem">
                  <span>Transfer Charge ({transferChargePercent}%):</span>
                  <strong>${transferCharge.toFixed(2)}</strong>
                </div>
                <div className="ChargeItem total">
                  <span>Total Deduction:</span>
                  <strong>${totalAmount.toFixed(2)}</strong>
                </div>
              </div>

              <div className="TransferFormActions">
                <button
                  className="secondary"
                  onClick={handleReset}
                  disabled={isLoading}
                >
                  Reset
                </button>
                <button
                  onClick={handleTransfer}
                  disabled={isLoading || !recipientEmail || !amount}
                >
                  {isLoading ? "Processing..." : "Transfer Funds"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Info */}
          <div className="TransferFundsRight">
            <div className="TransferSummaryCard">
              <div className="TransferSummaryIcon">
                <FaExchangeAlt />
              </div>
              <h4>Transfer Summary</h4>
              <h2>${parseFloat(amount || 0).toFixed(2)}</h2>
              <p>Amount to Transfer</p>
            </div>

            <div className="TransferInfoCard">
              <h4>Important Information</h4>
              <ul>
                <li>Transfers are processed instantly</li>
                <li>Current transfer charge: {transferChargePercent}%</li>
                <li>Ensure recipient details are correct</li>
                <li>Transfers cannot be reversed</li>
                <li>Minimum transfer amount is $1</li>
                <li>Contact support if you need assistance</li>
              </ul>
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
      </div>
    </>
  );
};

export default Transfer;
