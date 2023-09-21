import React, { useState, useEffect } from "react";

function AccountSummaries( props ) {
    const [cash, setCash] = useState();
    const [creditCards, setCreditCards] = useState();
    const [assets, setAssets] = useState();
    const [loans, setLoans] = useState();
    const [other, setOther] = useState();
    const [total, setTotal] = useState();

    let totalsDict = {
        "depository": 0,
        "investment": 0,
        "credit": 0,
        "loan": 0,
        "other": 0,
    };

    useEffect(() => {
        console.log(props.accountsArray);
        for(var i = 0; i < props.accountsArray.length; i++){
            totalsDict[props.accountsArray[i].type] += props.accountsArray[i].balances.current;
        }
        setCash(totalsDict["depository"].toLocaleString());
        setCreditCards(totalsDict["credit"].toLocaleString());
        setAssets(totalsDict["investment"].toLocaleString());
        setLoans(totalsDict["loan"].toLocaleString());
        setOther(totalsDict["other"].toLocaleString());
        setTotal(Object.values(totalsDict).reduce((a, b) => a + b, 0).toLocaleString())
    }, [props.accountsArray])

    

    return (
        <div className = "account-summary">
            <div>
                <span>Cash</span>
                <span>${ cash }</span>
            </div>
            <div>
                <span>Credit Cards</span>
                <span>${ creditCards }</span>
            </div>
            <div>
                <span>Assets</span>
                <span>${ assets }</span>
            </div>
            <div>
                <span>Loans</span>
                <span>${ loans }</span>
            </div>
            <div>
                <span>Other</span>
                <span>${ other }</span>
            </div>
            <div>
                <span>Total</span>
                <span>${ total }</span>
            </div>
        </div>
    );
    
  }

export default AccountSummaries;