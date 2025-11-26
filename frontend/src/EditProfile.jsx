import React from 'react'
import axios from "axios"
import toast, { Toaster } from "react-hot-toast";
import { useState } from 'react'
import useEditProfile from './custom-hooks/useEditProfile';

function EditProfile() {

    const [file, setFile] = useState();
    const { editProfile } = useEditProfile();

    const updateFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleEditProfile = async (e) => {

        e.preventDefault();
        editProfile(file);

    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleEditProfile} className='space-y-2'>
                        <h3 className="font-bold text-2xl text-center">Edit your Profile</h3>
                        <br></br>
                        <label className='text-lg'>Photo</label><br></br>
                        <input type="file" onChange={updateFile} className="input w-full" />
                        <br></br>
                        <label className='text-lg'>Name</label><br></br>
                        <input type="text" placeholder="fullname" className="input w-full" />
                        <br></br>
                        <button type='submit' className='bg-blue-600 w-full text-white text-lg rounded mt-4 p-2 hover:bg-blue-500 cursor-pointer'>Edit</button>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default EditProfile
