import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context-api/AuthContext';
import { useContext } from 'react';

function Header() {

  const { isAuthenticated, setIsAuthenticated, loading } = useContext(AuthContext)
  const navigate = useNavigate();

  const userLogout = async () => {

    try {
      const response = await axios.post("http://localhost:3000/api/logout",
        {},
        { withCredentials: true }
      );
      setIsAuthenticated(false); // update context

      if (response) {

        toast.success(response.data.message)
      }

      navigate("/");

    } catch (err) {
      console.log(err.response?.data || "Logout failed");
    }

  }

  if (loading) return null; // optional, prevent flicker

  return (
    <div>
      <nav className='bg-neutral p-2 shadow-black'>
        <ul className='flex items-center space-x-10 text-lg text-white'>
          {isAuthenticated ?

            (<>
              <h1 className='flex items-center text-2xl font-bold text-white'><FaShieldAlt /> AuthShield</h1>
              <Link to="/"><li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                Home</li></Link>
              <Link to="/signup"><li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                Signup</li></Link>
              <li className='hover:bg-slate-700 cursor-pointer p-2 rounded'>
                <Link to="/profile">Profile</Link></li>
              <li className='hover:bg-slate-700 cursor-pointer p-2 rounded' onClick={userLogout}>
                <Link to="/">Logout</Link></li>
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
            </>
            )
          }
        </ul>
      </nav>
    </div>
  )
}

export default Header
