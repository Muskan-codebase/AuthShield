import React from 'react'
import axios from "axios"
import toast, { Toaster } from "react-hot-toast";
import { useState } from 'react'
import useEditProfile from './custom-hooks/useEditProfile';
import DialogModal1 from './popup-modals/DialogModal1';

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
            <DialogModal1 props={handleEditProfile} action={updateFile}></DialogModal1>
        </div>
    )
}

export default EditProfile
