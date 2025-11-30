// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useLogin() {

    const navigate = useNavigate();

    const login = async function ({ email, password }) {

        try {

            const response = await axios.post(`${process.env.BACKEND_URI}/login`, {
                email,
                password
            });

            localStorage.setItem("Token", response.data.token);

            if (response) {

                toast.success(response.data.message);
            }

            navigate("/profile")

        } catch (error) {

            if (error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Some Error occured during Signup Process. Try again ....")
                console.log("Error", error);
            }
        }
    }

    return { login };
}

export default useLogin;