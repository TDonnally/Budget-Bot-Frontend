import { Navigate, useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from "../scripts/cookies";
import axios from 'axios';

const Protected = ({ token, children }) => {
    const navigate = useNavigate();

    async function sendFormData(userToken) {
        console.log(`Bearer ${token}`)
        const url = "http://localhost:3000/account"; // replace with your backend API endpoint
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined
        },
        };
      
        try {
            const response = await axios.get(url, config)
            console.log(response)
        } catch (error) {
            console.error("Error sending form data:", error);
            navigate("/signin", {replace: true});
        }
      }
    if (!token){
        return <Navigate to = "/signin" replace/>
    }
    else{
        sendFormData(token);
        return children;
    }
    
    
}

export default Protected;