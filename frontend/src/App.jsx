import Header from "./layer/Header"
import Footer from "./layer/Footer"
import Signup from "./Signup"
import Login from "./Login"
import Home from "./Home"
import Email from "./Email"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerifyOTP from "./VerifyOTP"
import ResetPassword from "./ResetPassword"
import Profile from "./Profile"

function App() {

  return (
    <>
      <Router>
    <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/forgotPassword" element={<Email></Email>} />
          <Route path="/verifyOTP" element={<VerifyOTP></VerifyOTP>} />
          <Route path="/resetPassword" element={<ResetPassword></ResetPassword>} />
          <Route path="/profile" element={<Profile></Profile>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
