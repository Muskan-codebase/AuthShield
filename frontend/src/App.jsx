import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Signup from "./Signup"
import Login from "./Login"
import Home from "./Home"
import Email from "./Email"
import { Routes, Route } from "react-router-dom";
import VerifyOTP from "./VerifyOTP"
import ResetPassword from "./ResetPassword"
import Profile from "./Profile"
import ProtectedRoute from "./protected-route/ProtectedRoute"
import toast, { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/forgotPassword" element={<Email></Email>} />
        <Route path="/verifyOTP" element={<VerifyOTP></VerifyOTP>} />
        <Route path="/resetPassword" element={<ResetPassword></ResetPassword>} />

        {/* User profile -> Protected Route */}
        <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route path="/profile" element={<Profile></Profile>} />
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
