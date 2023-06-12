import React, { useState, useEffect } from 'react';
import axios from "axios";

function GetAccessToken(props) {
    const [account, setAccount] = useState();
  
    useEffect(() => {
      async function fetchData() {
        let accessToken = await axios.post("http://localhost:3000/exchange-public-token", {publicToken: props.publicToken});
        console.log("accessToken", accessToken.data);
        const auth = await axios.post("/auth", {access_token: accessToken.data.accessToken});
        console.log("auth data ", auth.data);
        setAccount(auth.data.numbers.ach[0]);
      }
      fetchData();
    }, []);
    return account && (
        <>
          <p>Account number: {account.account}</p>
          <p>Routing number: {account.routing}</p>
        </>
    );
  }

  export default GetAccessToken;