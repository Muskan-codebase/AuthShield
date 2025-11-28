import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useSignup = () => {

    const navigate = useNavigate();

    const signup = async ({ name, email, password, confirmPassword }) => {

        try {

            const response = await axios.post("http://localhost:3000/api/signup", {
                name,
                email,
                password,
                confirmPassword
            })

            console.log(response);
            localStorage.setItem("Token", response.data.token);

            if (response) {

                toast.success(response.data.message);
            }

           navigate("/profile")
            // window.location.reload();

        } catch (error) {

            if (error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Some Error occured during Signup Process. Try again ....")
                console.log("Error", error);
            }
        }
    }

    return { signup };
}

export default useSignup;