import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MdEditSquare } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import profileIcon from "./assets/profile-icon.png";
import EditProfile from './EditProfile';
import axios from "axios"

function Profile() {

  const [user, setUser] = useState();
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("Token");
    navigate("/login");
    window.location.remove();
  }

  useEffect(() => {

    const fetchData = async () => {

      const userToken = localStorage.getItem("Token");

      try {

        const response = await axios.get("http://localhost:3000/api/getUserProfile", {
          headers: {
            "Authorization": `bearer ${userToken}`,
          }
        });

        console.log(response.data.user);
        setUser(response.data.user)

      } catch (err) {

        console.log("Error", err);
      }

    }

    fetchData()

  }, [])

  return (
    <>
      <div className='flex itmes-center justify-center'>
        <div className='border-2 border-gray-300 shadow-2xl shadow-gray-500 w-100 h-auto p-5 rounded-xl text-center mt-5'>
          <h1 className='text-4xl font-semibold text-black'>Profile</h1>
          <div className='flex items-center justify-center'>
            {user?.profilePic ?
              (<img src={`${user.profilePic}`}></img>)
              :
              (<img src={profileIcon} className='h-60 w-60'></img>)
            }
          </div>
          <p className='text-2xl'>{user?.name}</p>
          <p className='text-2xl'>{user?.email}</p><br></br>

          <div className='space-y-4'>
            <button onClick={() => document.getElementById('my_modal_3').showModal()} className='flex items-center justify-center bg-blue-600 border-none p-2 w-full text-white text-md rounded hover:bg-blue-500 cursor-pointer'><MdEditSquare />Edit profile</button>
            <button className='flex items-center justify-center bg-blue-600 border-none p-2 w-full text-white text-md rounded hover:bg-blue-500 cursor-pointer'>Remove Photo</button>
            <button onClick={userLogout} className='flex items-center justify-center bg-red-600 border-none p-2 w-full text-white text-md rounded  hover:bg-red-500 cursor-pointer'><RiLogoutCircleLine />Logout</button>
            <button className='flex items-center justify-center bg-red-600 border-none p-2 w-full text-white text-md rounded  hover:bg-red-500 cursor-pointer'><RiDeleteBin5Fill />Delete Account</button>
          </div>
        </div>
      </div>

      <EditProfile></EditProfile>
    </>
  )
}

export default Profile
