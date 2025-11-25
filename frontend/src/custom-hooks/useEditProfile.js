import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useEditProfile() {

    const editProfile = async (file) => {

        const token = localStorage.getItem("Token");
        const formData = new FormData();

        if (file) {
            formData.append("profilePicture", file)
        }

        try {

            const response = await axios.put("http://localhost:3000/api/uploadImage",
                formData,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                }
            )

            console.log("Updated Profile", response.data);
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

    return { editProfile };
}

export default useEditProfile;