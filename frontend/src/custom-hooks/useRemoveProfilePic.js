import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function useRemoveProfilePic() {

    const removeProfilePic = async function () {

        const token = localStorage.getItem("Token");

        try {

            const response = await axios.delete("http://localhost:3000/api/removeProfilePic", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "Application/json"
                }
            })

            console.log(response.data);

            if (response) {

                toast.success(response.data.message);

            }

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

    return { removeProfilePic };
}

export default useRemoveProfilePic;