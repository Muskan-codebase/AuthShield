import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useResetPassword = function () {

    const navigate = useNavigate();

    const resetPassword = async function ({ email, newPassword, confirmNewPassword }) {

        try {

            const response = await axios.post("http://localhost:3000/api/resetPassword", {
                email,
                newPassword,
                confirmNewPassword
            })

            if (response) {

                toast.success(response.data.message)
                navigate("/login")
                window.location.reload();
            }

        } catch (error) {

            if (error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Some Error occured during Signup Process. Try again ....")
                console.log("Error", error);
            }
        }
    }

    return { resetPassword };
}

export default useResetPassword;