import React, { useState } from "react";

function SpendingProgress({ responseData }) {
    return (
        <div>
            <div className = "stats-summary-cards top-card">
                <h3>Spending Last Month</h3>
                <p>Goal: $2,500</p>
                <p>Actual: $2,211</p>
                <div className="progress-bar"></div>
                <p>Income: $4,200</p>
            </div>
        </div>
    );
    
  }

export default SpendingProgress;