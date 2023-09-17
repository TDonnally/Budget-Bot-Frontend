
import React, { useState } from "react";
import axios from "axios"; 
import { Navigate, useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from "../../scripts/cookies";

function SignInForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function sendFormData(formData) {
        const url = "http://localhost:3000/signin"; 
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        setCookie("token", "");
        try {
            const response = await axios.post(url, formData, config);
            console.log("Form data sent successfully:", response.data);
            setCookie("token", response.data.authtoken, 1);
            console.log(getCookie("token"));
            navigate("/account/home", {replace: true});
        } catch (error) {
            console.error("Error sending form data:", error);
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { email, password};
        sendFormData(formData);
        setCookie("email", email)
        console.log("Form submitted!");
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Email Address:
            <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            />
        </label>
        <br />
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            />
        </label>
        <br />
        <button type="submit">Sign In</button>
        </form>
    );
}

export default SignInForm;