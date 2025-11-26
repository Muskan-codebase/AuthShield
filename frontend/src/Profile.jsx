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
import { RiErrorWarningLine } from "react-icons/ri";
import useDeleteAccount from './custom-hooks/useDeleteAccount';

function Profile() {

  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { fetchUserProfile } = useFetchUserProfile();
  const { deleteAccount } = useDeleteAccount()

  const userLogout = () => {
    localStorage.removeItem("Token");
    navigate("/login");
    window.location.remove();
  }

  useEffect(() => {

    // const fetchData = async () => {

    //   const userToken = localStorage.getItem("Token");
    //   console.log(userToken)

    //   try {

    //     const response = await axios.get("http://localhost:3000/api/getUserProfile", {
    //       headers: {
    //         "Authorization": `Bearer ${userToken}`,
    //       }
    //     });

    //     console.log(response.data.user);
    //     setUser(response.data.user)

    //   } catch (err) {

    //     console.log("Error", err);
    //   }

    // }

    fetchUserProfile(setUser)

  }, [])

  const removeProfilePic = async () => {

    const token = localStorage.getItem("Token");

    try {

      const response = await axios.delete("http://localhost:3000/api/removeProfilePic", {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "Application/json"
        }
      })

      console.log(response.data);
      toast.success(response.data.message);
      window.location.reload();


    } catch (error) {

      if (error.response.data && error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Some Error occured during Signup Process. Try again ....")
        console.log("Error", error);
      }

    }

  }

  const handleDeleteAccount = () => {

    deleteAccount();

  }

  return (
    <>
      <div className='flex itmes-center justify-center pb-20'>
        <div className='border-2 border-gray-300 shadow-2xl shadow-gray-500 w-100 h-auto p-5 rounded-xl text-center mt-5'>
          <h1 className='text-4xl font-semibold text-black'>Profile</h1>
          <div className='flex items-center justify-center mt-5 mb-5'>
            <div className="avatar">
              <div className="w-50 h-50 border-blue-800 border-7 rounded-full">
                {user?.profilePic ?
                  (<img src={`${user?.profilePic}`} onDoubleClick={() => document.getElementById('my_modal_2').showModal()} className='hover:cursor-pointer'></img>)
                  :
                  (<img src={profileIcon}></img>)
                }
              </div>
            </div>
          </div>
          <p className='text-2xl'>{user?.name}</p>
          <p className='text-2xl'>{user?.email}</p><br></br>

          <div className='space-y-4'>
            <button onClick={() => document.getElementById('my_modal_3').showModal()} className='flex items-center justify-center bg-blue-600 border-none p-2 w-full text-white text-md rounded hover:bg-blue-500 cursor-pointer'><MdEditSquare />Edit profile</button>
            <button onClick={removeProfilePic} className='flex items-center justify-center bg-blue-600 border-none p-2 w-full text-white text-md rounded hover:bg-blue-500 cursor-pointer'>Remove Photo</button>
            <button onClick={userLogout} className='flex items-center justify-center bg-red-600 border-none p-2 w-full text-white text-md rounded  hover:bg-red-500 cursor-pointer'><RiLogoutCircleLine />Logout</button>
            <button onClick={() => document.getElementById('my_modal_4').showModal()} className='flex items-center justify-center bg-red-600 border-none p-2 w-full text-white text-md rounded  hover:bg-red-500 cursor-pointer'><RiDeleteBin5Fill />Delete Account</button>
          </div>
        </div>
      </div>

      <EditProfile></EditProfile>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box overflow-y-hidden p-0 h-130 w-130 rounded-full">
          <img src={`${user?.profilePic}`} className='h-130 w-130 rounded-full'></img>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog >

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h1 className="font-bold text-3xl text-center text-red-600">Delete Account</h1>
          <div className='flex items-center justify-center p-2'>
            <RiErrorWarningLine className='text-7xl text-red-600' />
          </div>
          <p className="text-center text-lg">
            <span className='font-semibold text-2xl'>Are you sure you want to delete your account?</span><br></br>
            This action is permanent and cannot be undone.</p>
          <button onClick={handleDeleteAccount} className='w-full bg-red-600 text-white text-lg text-center p-2 mt-5 rounded-md hover:bg-red-500 cursor-pointer active:bg-red-700'>Delete my account</button>
        </div>
      </dialog>


      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </>
  )
}

export default Profile
