import React, { useState } from "react";
import axios from "axios"; 
import { getCookie, setCookie } from "../scripts/cookies";
import PlaidLink from "./PlaidLink";

function AccountView({ responseData }) {
    if (responseData.user.needToken){
        return (
            <div>
              <PlaidLink/>
            </div>
          );
    }
    else{
        return (
            <div>
              <p>Account</p>
              {responseData && (
                <div>
                  <h3>Response Data:</h3>
                  <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
              )}
            </div>
          );
    }
    
  }

export default AccountView