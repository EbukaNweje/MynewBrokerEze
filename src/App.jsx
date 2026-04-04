import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Payment from "./Pages/Deposit/Payment";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Verify from "./Pages/Verify/Verify";
import Other from "./Pages/Other/Other";
import Trading from "./Pages/Trading/Trading";
import Markets from "./Pages/Markets/Markets";
import Plans from "./Pages/Plans/Plans";
import Contact from "./Pages/Contact/Contact";
import Terms from "./Pages/Terms/Terms";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/other" element={<Other />} />
          <Route path=":id/payment/:paymentname" element={<Payment />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
