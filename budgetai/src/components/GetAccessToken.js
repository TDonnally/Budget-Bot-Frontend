import React, { useState, useEffect } from 'react';
import axios from "axios";

function GetAccessToken(props) {
    const [account, setAccount] = useState();
    console.log(props.user);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post("http://localhost:3000/exchange-public-token", {
            publicToken: props.publicToken,
            email: props.user,
          });
          console.log("accessToken", response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, [props.publicToken, props.user]);
    return account && (
        <>
          <p>Account number: {account.account}</p>
          <p>Routing number: {account.routing}</p>
        </>
    );
  }

  export default GetAccessToken;