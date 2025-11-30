import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useResetPassword = function () {

    const navigate = useNavigate();

    const resetPassword = async function ({ email, resetToken, newPassword, confirmNewPassword }) {
        try {
            const response = await axios.post("http://localhost:3000/api/resetPassword", {
                email,
                resetToken,
                newPassword,
                confirmNewPassword
            });

            if (response) {
                toast.success(response.data.message);
            }

            navigate("/login");

        } catch (error) {
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Some error occurred. Try again...");
                console.log("Error", error);
            }
        }
    }

    return { resetPassword };
}

export default useResetPassword;