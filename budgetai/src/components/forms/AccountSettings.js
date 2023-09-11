
import React, { useState } from "react";
import axios from "axios"; 
import { Navigate, useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from "../../scripts/cookies";

function AccountSettings(props) {

    const [fieldValue, setFieldValue] = useState("");

    async function sendFormData(formData) {
        const url = "http://localhost:3000/update"; // replace with your backend API endpoint
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        try {
            const response = await axios.post(url, formData, config);
        } catch (error) {
            console.error("Error sending form data:", error);
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { fieldValue };
        sendFormData(formData);
        console.log("Form submitted!");
    };

    return (
        <>
            <form className = "field-updater" onSubmit={handleSubmit}>
                <input
                    type={props.inputType}
                    value={fieldValue}
                    onChange={(event) => setFieldValue(event.target.value)}
                    required
                />
            <br />
            <button type="submit">Sign In</button>
            </form>
        </>
    );
}

export default AccountSettings;