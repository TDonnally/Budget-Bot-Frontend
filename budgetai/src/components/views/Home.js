import React, { useState, useRef, useEffect } from "react";
import NetWorthChart from "../NetWorthChart";
import AccountSummaries from "../AccountSummaries";
import BudgetSuggestionCarousel from "../BudgetSuggestionCarousel";
import MobileNav from "../MobileNav"
import SpendingBar from "../SpendingBar"


function Home(props) {
  const accountsArray = props.responseData.accountsData.accounts;
  const transactionsArray = props.responseData.transactionsData.transactions;
  const today = new Date();

  const [netWorth, setNetWorth ] = useState(0);
  useEffect(() => { 
    let month = today.getMonth() + 1;
    let currentWorth = 0;
    let newWorth = 0;
    let updatedChartData = [];
    //Init current net worth
    for(var i = 0; i<accountsArray.length; i++){
      currentWorth += accountsArray[i].balances.current;
      newWorth = currentWorth;
    }
    setNetWorth(currentWorth);

    //Init past net worths and store them in an array
    
  }, [])

  console.log(netWorth);

  return (
      <div>
        <p style = {{fontSize: '0px'}}>Home</p>
        <NetWorthChart netWorth = {netWorth}/>
        <div className="chart-cover">
          <AccountSummaries accountsArray = {accountsArray} />
          <BudgetSuggestionCarousel/>
          <SpendingBar  transactionsArray = {transactionsArray} />
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