import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{
            backgroundImage: "url('/src/assets/blue-bg.jpg')",
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
            <h1 className='flex justify-center items-center text-7xl text-center font-bold text-white text-shadow-black text-shadow-lg'>
                <FaShieldAlt className='text-9xl text-white text-shadow-lg text-shadow-black space-x-2' /> Welcome to AuthShield</h1>
            <p className='text-center text-white font-semibold text-2xl italic'>
                AuthShield is a modern authentication system built using the MERN stack.
                It ensures your users’ data is protected with secure login, OTP verification,
                profile image uploads, and protection against attacks. Explore the system and
                see how security meets usability in a real web app.
            </p>

            <div className='mt-20'>
                <button className='flex justify-center items-center bg-white rounded-2xl border-none text-lg text-black p-4'>
                    <Link to="/signup">get started</Link>
                    <FaArrowRight className='ms-2' /></button>
            </div>
        </div>
    )
}

export default Home
