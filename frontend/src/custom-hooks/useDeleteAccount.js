import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context-api/AuthContext";
import { useContext } from "react";

function useDeleteAccount() {

    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);

    const deleteAccount = async () => {

        try {

            const response = await axios.delete("http://localhost:3000/api/deleteAccount", 
                { withCredentials: true }
            );

            setIsAuthenticated(false)

            if (response) {

                console.log(response.data.message);
                toast.success(response.data.message);
            }

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