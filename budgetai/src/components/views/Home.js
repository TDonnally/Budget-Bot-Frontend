import React, { useState } from "react";
import axios from "axios"; 
import { getCookie, setCookie } from "../../scripts/cookies";
import PlaidLink from "../PlaidLink";
import NetWorthChart from "../NetWorthChart";
import AccountSummaries from "../AccountSummaries";
import BudgetSuggestionCarousel from "../BudgetSuggestionCarousel";
import MobileNav from "../MobileNav"
import SpendingBar from "../SpendingBar"
import { Link, Switch, Route } from 'react-router-dom';

function Home({ responseData }) {
  if (!responseData) {
    return <div>Loading...</div>;
  }


    else{
        return (
            <div>
              <MobileNav/>
              <NetWorthChart data = {responseData}/>
              <div className="chart-cover">
                <AccountSummaries/>
                <BudgetSuggestionCarousel />
                <SpendingBar />
              </div>
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

export default Home;