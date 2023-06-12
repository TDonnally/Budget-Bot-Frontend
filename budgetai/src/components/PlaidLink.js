import React, { useState, useEffect } from 'react';
import axios from "axios";
import {usePlaidLink} from "react-plaid-link";

import GetAccessToken from './GetAccessToken'

const PlaidLink = () => {
  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();

  useEffect(() => {
    // Fetch link token from your server
    const fetchLinkToken = async () => {
        const response = await axios.post("http://localhost:3000/create-link-token");
        setLinkToken(response.data.link_token);
    };

    fetchLinkToken()
    .then(console.log(linkToken));
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      setPublicToken(public_token);
      console.log("success", public_token, metadata);
      // send public_token to server
    },
  });

  return publicToken ? (<GetAccessToken publicToken={publicToken} />) : (
      <button onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
  );
};

export default PlaidLink;