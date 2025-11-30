import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useDeleteAccount() {

    const navigate = useNavigate();

    const deleteAccount = async () => {

        const userToken = localStorage.getItem("Token");

        try {

            const response = await axios.delete(`${process.env.BACKEND_URI}/deleteAccount`, {
                headers: {
                    "Authorization": `Bearer ${userToken}`,
                }
            });

            if (response) {

                console.log(response.data.message);
                toast.success(response.data.message);
            }

            localStorage.removeItem("Token")
            navigate("/")

        } catch (error) {

            if (error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Some Error occured during Signup Process. Try again ....")
                console.log("Error", error);
            }
        }
    }

    return { deleteAccount };
}

export default useDeleteAccount;