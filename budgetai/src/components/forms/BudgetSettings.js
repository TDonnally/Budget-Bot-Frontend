
import React, { useState } from "react";
import axios from "axios"; 
import { Navigate, useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from "../../scripts/cookies";

function BudgetSettings() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function sendFormData(formData) {
        const url = "http://localhost:3000/signin"; // replace with your backend API endpoint
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        setCookie("token", "");
        try {
            const response = await axios.post(url, formData, config);
            navigate("/account", {replace: true});
            console.log("Form data sent successfully:", response.data);
            setCookie("token", response.data.authtoken, 1);
            navigate("/account", {replace: true});
            console.log(getCookie("token"));
        } catch (error) {
            console.error("Error sending form data:", error);
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { email, password};
        sendFormData(formData);
        console.log("Form submitted!");
    };

    return (
        <>
            <h3>Adjust Budget Allocation</h3>
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
        </>
    );
}

export default BudgetSettings;