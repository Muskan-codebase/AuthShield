import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const userToken = localStorage.getItem("Token");
  const navigate = useNavigate();

  const userLogout = () => {

    localStorage.removeItem("Token");
    navigate("/login");
    window.location.reload();

  }

  return (
    <div>
      <nav className='bg-neutral p-2 shadow-black'>
        <ul className='flex items-center space-x-10 text-lg text-white'>
          {userToken ?

            (<>
              <h1 className='flex items-center text-2xl font-bold text-white'><FaShieldAlt /> AuthShield</h1>
              <Link to="/"><li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                Home</li></Link>
              <Link to="/signup"><li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                Signup</li></Link>
              <li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                <Link to="/profile">Profile</Link></li>
              <li className='hover:bg-slate-700 cursor-pointer p-2 rounded' onClick={userLogout}>
                <Link to="">Logout</Link></li>
            </>)

            :

            (<>
              <h1 className='flex items-center text-2xl font-bold text-white'><FaShieldAlt /> AuthShield</h1>
              <Link to="/"><li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                Home</li></Link>
              <Link to="/signup"><li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                Signup</li></Link>
              <Link to="/login"><li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                Login</li></Link>
              <li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                <Link to="/">Profile</Link></li>
            </>)

          }
        </ul>
      </nav>
    </div>
  )
}

export default Header
