import React from 'react'
import axios from "axios"
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from 'react'
import useEditProfile from './custom-hooks/useEditProfile';
import DialogModal1 from './popup-modals/DialogModal1';

function EditProfile({ user, setUser }) {

    const [file, setFile] = useState();
    const [editName, setEditName] = useState("");
    const [bio, setBio] = useState("");
    const { editProfile } = useEditProfile();

    useEffect(() => {
        if (user) {
            setEditName(user.name);
            setBio(user.bio || "");
        }
    }, [user]);

    const updateFile = (e) => {
        setFile(e.target.files[0]);
    }

    const updateEditName = (e) => {

        setEditName(e.target.value);
    }

    const updateBio = (e) => {
        setBio(e.target.value);
    }

    const handleEditProfile = async (e) => {

        e.preventDefault();
        editProfile(file, editName, bio);

    }

    return (
        <div>
            <DialogModal1
                props={handleEditProfile}
                updateFile={updateFile}
                updateName={updateEditName}
                updateBio={updateBio}
                editName={editName}
                bio={bio}
            ></DialogModal1>
        </div>
    )
}

export default EditProfile
