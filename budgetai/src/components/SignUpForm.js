import React, { useState } from "react";
import axios from "axios"; 

function SignUpForm() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    async function sendFormData(formData) {
        const url = "http://localhost:3000/signup"; // replace with your backend API endpoint
        const config = {
          headers: { "Content-Type": "application/json" },
        };
      
        try {
            const response = await axios.post(url, formData, config);
            console.log("Form data sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending form data:", error);
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { email, username, password, retypePassword };
        sendFormData(formData);
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
        <label>
            Username:
            <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
        <label>
            Retype Password:
            <input
            type="password"
            value={retypePassword}
            onChange={(event) => setRetypePassword(event.target.value)}
            required
            />
        </label>
        <br />
        <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm;