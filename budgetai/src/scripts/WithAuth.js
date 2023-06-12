import { Navigate, useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from "../scripts/cookies";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Protected = ({ token, children }) => {
    const navigate = useNavigate();
    const [responseData, setResponseData] = useState(null);

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
            const response = await axios.get(url, config);
            setResponseData(response.data); 
            console.log(response)
        } catch (error) {
            console.error("Error sending form data:", error);
            navigate("/signin", {replace: true});
        }
      }

      useEffect(() => {
        if (token) {
            sendFormData(token);
        }
    }, []);
    if (!token){
        return <Navigate to = "/signin" replace/>
    }
    else{
        const childrenWithProps = React.Children.map(children, (child) =>
            React.cloneElement(child, { responseData })
        );
        return childrenWithProps;
    }
    
    
}

export default Protected;