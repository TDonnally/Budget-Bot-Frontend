import React, { useState } from "react";
import StatsTitle from "../StatsTitle";
import DetailedSpending from "../DetailedSpending";

function Stats({ responseData }) {
   
    return (
        <div>
            <p style = {{fontSize: '0px'}}>Stats</p>
            <StatsTitle />
            <DetailedSpending />
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