import React, { useState } from "react";
import axios from "axios"; 
import { Navigate, useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from "../../scripts/cookies";
import { FaPen, FaX, FaCheck } from "react-icons/fa6";

function AccountSettings(props) {

    const [fieldValue, setFieldValue] = useState("");
    const [editField, setEditField] = useState(false);

    async function sendFormData(formData) {
        const url = "http://localhost:3000/update"; // replace with your backend API endpoint
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        try {
            const response = await axios.post(url, formData, config);
            console.log(response);
        } catch (error) {
            console.error("Error sending form data:", error);
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        const columnToUpdate = props.columnToUpdate;
        const userEmail = getCookie("email");
        const formData = {   };
        if(props.fieldJSON){
            formData = { columnToUpdate, fieldValue, userEmail  };
        }
        else{
            formData = { columnToUpdate, fieldValue, userEmail  };
        }
        sendFormData(formData);
        console.log("Form submitted!");
    };
    const toggleEdit = (setting) => () => {
        setEditField(setting);
    }

    return (
        <>
        <p className = "field-title">{ props.fieldTitle }</p>
        {   editField ?(
            <form className = "field-updater" onSubmit={handleSubmit}>
                <input
                    type={props.inputType}
                    value={fieldValue}
                    onChange={(event) => setFieldValue(event.target.value)}
                    required
                />
            <button className = "update-field-button" type="submit"><FaCheck/></button>
            <div className = "close" onClick={toggleEdit(false)}><FaX/></div>
            </form>
        ):(
        <>  
            <div className = "field-updater">
                <p>{ props.currentValue }</p>
                <div className = "open" onClick={toggleEdit(true)}><FaPen/></div>
            </div>
        </>
        )
        }
        </>
    );
}

export default AccountSettings;