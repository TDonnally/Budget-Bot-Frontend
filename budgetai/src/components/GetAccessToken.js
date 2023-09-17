import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';  // Corrected import

function GetAccessToken(props) {
    const navigate = useNavigate();  // Corrected usage

    const [account, setAccount] = useState();
    console.log(props.user);
    useEffect(() => {
      fetchData();
    }, [props.publicToken, props.user]);

    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/exchange-public-token", {
          publicToken: props.publicToken,
          email: props.user,
        });
        console.log("accessToken", response.data);
        window.location.reload(true)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    return (
        <>
          Account connected!
          
        </>
    );
}

export default GetAccessToken;