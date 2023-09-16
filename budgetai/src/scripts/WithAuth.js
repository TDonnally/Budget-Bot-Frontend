import { Navigate, useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from "../scripts/cookies";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Protected = ({ token, children }) => {
    const navigate = useNavigate();
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        if (getCookie("token")) {
            sendFormData();
        }
    }, []);
    async function sendFormData() {
        console.log(`Bearer ${getCookie("token")}`)
        const url = "http://localhost:3000/account"; 
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${getCookie("token")}` : undefined
        },
        };
      
        try {
            const response = await axios.get(url, config);
            setResponseData(response.data); 
            console.log(response);
            navigate("/account/home", {replace: true});
        } catch (error) {
            console.error("Error sending form data:", error);
            navigate("/signin", {replace: true});
        }
      }

     
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