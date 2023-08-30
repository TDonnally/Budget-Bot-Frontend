import React, { useState } from "react";
import axios from "axios"; 
import { getCookie, setCookie } from "../scripts/cookies";
import PlaidLink from "./PlaidLink";
import NetWorthChart from "./NetWorthChart";
import AccountSummaries from "./AccountSummaries";
import BudgetSuggestionCarousel from "./BudgetSuggestionCarousel";

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
              <NetWorthChart data = {responseData}/>
              <AccountSummaries/>
              <BudgetSuggestionCarousel />
              {/*
              {responseData && (
                <div>
                  <h3>Response Data:</h3>
                  <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
              )}
              */}
            </div>
          );
    }
    
  }

export default AccountView