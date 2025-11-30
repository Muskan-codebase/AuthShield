import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useVerifyOTP = () => {

    const navigate = useNavigate();

    const verifyOTP = async ({ email, otp }) => {

        try {

            const response = await axios.post(`http://localhost:3000/api/verifyOTP`, {
                email,
                otp
            })

            if (response.data.message) {
                toast.success(response.data.message);
            }

            navigate(response.data.redirectURL)

        } catch (error) {

            if (error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Some Error occured during Signup Process. Try again ....")
                console.log("Error", error);
            }

        }

    }

    return { verifyOTP }
}

export default useVerifyOTP;