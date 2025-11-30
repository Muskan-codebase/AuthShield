import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useFetchUserProfile() {

    const fetchUserProfile = async function(setUser) {

        const userToken = localStorage.getItem("Token");
        console.log(userToken)

        try {

            const response = await axios.get(`${process.env.BACKEND_URI}/getUserProfile`, {
                headers: {
                    "Authorization": `Bearer ${userToken}`,
                }
            });

            console.log(response.data.user);
            setUser(response.data.user)

        } catch (err) {

            console.log("Error", err);
        }
    }

    return { fetchUserProfile };
}

export default useFetchUserProfile;