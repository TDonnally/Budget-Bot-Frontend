import React, { useState, useRef, useEffect } from "react";
import NetWorthChart from "../NetWorthChart";
import AccountSummaries from "../AccountSummaries";
import BudgetSuggestionCarousel from "../BudgetSuggestionCarousel";
import MobileNav from "../MobileNav"
import SpendingBar from "../SpendingBar"


function Home({ responseData }) {


  return (
      <div>
        <p style = {{fontSize: '0px'}}>Home</p>
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
    


export default Home;