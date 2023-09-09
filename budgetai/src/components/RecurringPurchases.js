import React, { useState } from "react";

function RecurringPurchases({ responseData }) {
    
    

    return (
        <>
            <h3>Recurring Purchases</h3>
            <div className = "recurring-purchases">
                <div>
                    <span>Purchase</span>
                    <span>Amount</span>
                </div>
                <div>
                    <span>Netflix</span>
                    <span>$14.99</span>
                </div>
                <div>
                    <span>Invitation Homes</span>
                    <span>$1,312.19</span>
                </div>
                <div>
                    <span>Spotify</span>
                    <span>$9.99</span>
                </div>
                <div>
                    <span>Paramount+</span>
                    <span>$12.99</span>
                </div>
                <div>
                    <span>CVS Member</span>
                    <span>$4.99</span>
                </div>
            </div>
        </>
        
    );
    
  }

export default RecurringPurchases;