import React, { useState, useRef, useEffect } from "react";
import { getCookie } from "../../scripts/cookies";
import NetWorthChart from "../NetWorthChart";
import AccountSummaries from "../AccountSummaries";
import BudgetSuggestionCarousel from "../BudgetSuggestionCarousel";
import MobileNav from "../MobileNav"
import SpendingBar from "../SpendingBar"
import PlaidLink from "../PlaidLink";


function Home(props) {
  const accountsArray = props.responseData.accountsData;
  const transactionsArray = props.responseData.transactionsData;
  const spendingPercents = props.responseData.spendingPercents;
  const today = new Date();

  const [netWorth, setNetWorth ] = useState(0);
  const[accountsArrayCleaned, setAccountsArrayCleaned] = useState([]);
  useEffect(() => { 
    let month = today.getMonth() + 1;
    let currentWorth = 0;
    let newWorth = 0;
    let accountsArrayHolder = [];
    let updatedChartData = [];
    //Init current net worth
    for(var i = 0; i<accountsArray.length; i++){
      for(var j = 0; j < accountsArray[i].accounts.length; j++){
        accountsArrayHolder.push(accountsArray[i].accounts[j]);
        currentWorth += accountsArray[i].accounts[j].balances.current;
        newWorth = currentWorth;
      }
    }
    setNetWorth(currentWorth);
    setAccountsArrayCleaned(accountsArrayHolder);
  }, [])


  return (
      <div>
        <p style = {{fontSize: '0px'}}>Home</p>
        <NetWorthChart netWorth = {netWorth}/>
        <div className="chart-cover">
          <AccountSummaries accountsArray = {accountsArrayCleaned} />
          <PlaidLink titleText = {"Get a Better Picture of Your Budget!"} bodyText= {"Connect your bank account today and gain valuable insights into your finances – click below to get started!"} user = {getCookie('email')}/>
          <BudgetSuggestionCarousel transactionsArray = {transactionsArray} spendingPercents = {spendingPercents}/>
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