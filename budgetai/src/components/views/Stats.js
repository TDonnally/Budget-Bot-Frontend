import React, { useState } from "react";
import TitleNav from "../TitleNav";
import SpendingProgress from "../SpendingProgress";
import IACards from "../IACards";
import AccordionContainer from "../AccordionContainer";
import RecurringPurchases from "../RecurringPurchases";


function Stats({ responseData }) {
   
    return (
        <div className = "stats-container">
            <p style = {{fontSize: '0px'}}>Stats</p>
            <TitleNav statsTitle='Stats'/>
            <SpendingProgress />
            <IACards />
            <AccordionContainer />
            <RecurringPurchases />
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


export default Stats;