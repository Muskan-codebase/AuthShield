import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"
import useLogin from './custom-hooks/useLogin';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();
    const { login } = useLogin();

    const handlePasswordChange = function () {
        setShowPassword(!showPassword)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value)
    }

    const userLogin = async (e) => {

        e.preventDefault();
        login({ email, password });

        // try {

        //     const response = await axios.post("http://localhost:3000/api/login", {
        //         email,
        //         password
        //     });

        //     localStorage.setItem("Token", response.data.token);

        //     toast.success(response.data.message);
        //     navigate("/profile");
        //     window.location.reload();

        // } catch (error) {

        //     if (error.response.data && error.response.data.message) {
        //         toast.error(error.response.data.message)
        //     } else {
        //         toast.error("Some Error occured during Signup Process. Try again ....")
        //         console.log("Error", error);
        //     }
        // }
    }

    return (
        <>
            <div style={{
                backgroundImage: "url('/src/assets/blue-bg.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // flexDirection: "column",
                // padding: "50px"
            }} className='flex justify-center items-center'>

                <form onSubmit={userLogin} className='bg-white border-2 border-gray-300 shadow-2xl shadow-black rounded-xl p-5 h-auto w-100 space-y-4'>
                    <h1 className='text-center text-5xl font-semibold text-blue-700'>Login</h1>

                    <label className='text-lg'>Email</label><br></br>
                    <input type="email" value={email} onChange={updateEmail} placeholder="mail@site.com" className="input w-full" />

                    <br></br>

                    <div className="relative">
                        <label className='text-lg'>Password</label><br></br>
                        <input type={showPassword ? "text" : "password"} value={password} onChange={updatePassword} placeholder="password" className="input w-full" />
                        {showPassword ?
                            (<span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEye onClick={handlePasswordChange}></FaRegEye>
                            </span>)

                            :

                            (<span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
                                <FaRegEyeSlash onClick={handlePasswordChange}></FaRegEyeSlash>
                            </span>)

                        }
                    </div>

                    <button className='text-lg p-2 w-full bg-blue-600 text-white rounded mt-5 hover:bg-blue-500 cursor-pointer active:bg-blue-700'>Login</button>
                    <p className='text-center'>
                        <span className='font-semibold text-blue-600 cursor-pointer'>
                            <Link to="/forgotPassword">forgot password?</Link>
                        </span></p>
                    <p className='text-center'>Don't have an account? <span className='font-semibold text-blue-600 cursor-pointer'>
                        <Link to="/signup">Signup</Link></span></p>

                </form>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default Login
