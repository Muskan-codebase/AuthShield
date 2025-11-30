import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MdEditSquare } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import profileIcon from "./assets/profile-icon.webp";
import EditProfile from './EditProfile';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"
import useFetchUserProfile from './custom-hooks/useFetchUserProfile';
import useDeleteAccount from './custom-hooks/useDeleteAccount';
import useRemoveProfilePic from './custom-hooks/useRemoveProfilePic';
import DialogModal2 from './popup-modals/DialogModal2';
import DialogModal3 from './popup-modals/DialogModal3';

function Profile() {

  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { fetchUserProfile } = useFetchUserProfile();
  const { deleteAccount } = useDeleteAccount()
  const { removeProfilePic } = useRemoveProfilePic();

  const userLogout = () => {
    localStorage.removeItem("Token");
    toast.success("Logging out");
    navigate("/login");
    window.location.reload();
  }

  useEffect(() => {

    fetchUserProfile(setUser)

  }, [])

  const handleRemoveProfilePic = () => {

    removeProfilePic();

  }

  const handleDeleteAccount = () => {

    deleteAccount();

  }

  return (
    <>
      <div className='flex itmes-center justify-center p-10 pb-50'>
        <div className='border-2 border-gray-300 shadow-2xl shadow-gray-500 w-100 h-auto p-5 rounded-xl text-center mt-5'>
          <h1 className='text-3xl font-semibold text-black'>Profile</h1>
          <div className='flex items-center justify-center mt-5 mb-5'>
            <div className="avatar">
              <div className="w-50 h-50 border-blue-800 border-7 rounded-full">
                {user?.profilePic ?
                  (<img src={`${user?.profilePic}`} onDoubleClick={() => document.getElementById('my_modal_3').showModal()} className='hover:cursor-pointer'></img>)
                  :
                  (<img src={profileIcon}></img>)
                }
              </div>
            </div>
          </div>
          <p className='text-2xl font-bold'>{user?.name}</p>
          <p className='text-lg text-gray-700'>{user?.email}</p><br></br>

          {user?.bio ?
            (<p className='text-xl pb-5 font-semibold'>{user?.bio}</p>)

            :

            (null)
          }
          
          <div className='space-y-4'>
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='flex items-center justify-center bg-blue-600 border-none p-2 w-full text-white text-md rounded hover:bg-blue-500 cursor-pointer active:bg-blue-700'><MdEditSquare />Edit profile</button>
            <button onClick={handleRemoveProfilePic} className='flex items-center justify-center bg-blue-600 border-none p-2 w-full text-white text-md rounded hover:bg-blue-500 cursor-pointer active:bg-blue-700'>Remove Photo</button>
            <button onClick={userLogout} className='flex items-center justify-center bg-red-600 border-none p-2 w-full text-white text-md rounded  hover:bg-red-500 cursor-pointer active:bg-red-700'><RiLogoutCircleLine />Logout</button>
            <button onClick={() => document.getElementById('my_modal_2').showModal()} className='flex items-center justify-center bg-red-600 border-none p-2 w-full text-white text-md rounded hover:bg-red-500 cursor-pointer active:bg-red-700'><RiDeleteBin5Fill />Delete Account</button>
          </div>
        </div>
      </div>

      <EditProfile user={user} setUser={setUser}></EditProfile>

      <DialogModal2 props={handleDeleteAccount}></DialogModal2>

      <DialogModal3 props={user?.profilePic}></DialogModal3>

    </>
  )
}

export default Profile
