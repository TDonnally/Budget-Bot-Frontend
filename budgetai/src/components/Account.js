import React, { useState } from "react";
import axios from "axios"; 
import { getCookie, setCookie } from "../scripts/cookies";
import PlaidLink from "./PlaidLink";
import NetWorthChart from "./NetWorthChart";

function AccountView({ responseData }) {
    if (!responseData) {
        return <div>Loading...</div>;
      }
    if (responseData.needToken){
        console.log(responseData);
        return (
            <div>
              <PlaidLink user = {responseData.user.email}/>
            </div>
          );
    }
    else{
      console.log(responseData.needToken);
        return (
            <div>
              <p>Account</p>
              <NetWorthChart data = {responseData}/>
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