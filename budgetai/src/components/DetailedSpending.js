import React, { useState } from "react";

function DetailedSpending({ responseData }) {
    
    

    return (
        <div className = "spending-summary">
            <div>
                <span>Cash</span>
                <span>$12,123</span>
            </div>
            <div>
                <span>Credit Cards</span>
                <span>$12,123</span>
            </div>
            <div>
                <span>Assets</span>
                <span>$12,123</span>
            </div>
            <div>
                <span>Loans</span>
                <span>$12,123</span>
            </div>
            <div>
                <span>Total</span>
                <span>$12,123</span>
            </div>
        </div>
    );
    
  }

export default DetailedSpending;