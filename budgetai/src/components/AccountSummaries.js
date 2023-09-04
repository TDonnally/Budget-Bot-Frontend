import React, { useState } from "react";

function AccountSummaries({ responseData }) {
    
    

    return (
        <div className = "account-summary">
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

export default AccountSummaries;