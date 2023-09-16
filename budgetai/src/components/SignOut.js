import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { setCookie } from "../scripts/cookies";

function SignOut(){
    const navigate = useNavigate();

    function logOut(){
        console.log("logout");
        setCookie("token", null);
        navigate("/signin", {replace: true});
    }
    return(
        <button onClick={logOut}>Sign Out</button>
    )
}

export default SignOut;