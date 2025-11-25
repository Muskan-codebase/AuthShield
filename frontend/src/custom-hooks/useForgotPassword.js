import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useForgotPassword() {

    const navigate = useNavigate();

    const forgotPassword = async function ({ email }) {

        try {

            const response = await axios.post("http://localhost:3000/api/forgotPassword", {
                email
            })

            if (response) {

                toast.success(response.data.message)
                navigate("/verifyOTP")
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

    return { forgotPassword }
}

export default useForgotPassword;