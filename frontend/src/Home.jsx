import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Shield from "./assets/shield.png";

function Home() {

    return (
        <div style={{
            backgroundImage: "url('/src/assets/blue-bg.avif')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "50px"
        }}>
            <h1 className='text-5xl text-white font-bold text-center'>
                <span className='title-1'>Welcome to</span>
                <span className='text-8xl flex items-center justify-center title-2'>
                    <img src={`${Shield}`} className='h-32 w-32'></img>
                    AuthShield
                </span><br></br>
            </h1>
            <p className='text-center text-white text-2xl ps-15 pe-15 para'>
                AuthShield is a modern authentication system built using the MERN stack.<br></br>
                It ensures your users’ data is protected with secure login, OTP verification,
                profile image uploads, and protection against attacks. Explore the system and
                see how security meets usability in a real web app.
            </p>

            <div className='mt-20'>
                <button className='flex justify-center items-center bg-amber-400 w-50 cursor-pointer rounded-2xl border-none text-lg text-black p-4 hover:bg-amber-300 active:bg-amber-500'>
                    <Link to="/signup">get started</Link>
                    <FaArrowRight className='ms-2' /></button>
            </div>
        </div>
    )
}

export default Home
