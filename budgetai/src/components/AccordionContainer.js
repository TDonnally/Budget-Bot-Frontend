import React, { useState } from "react";
import DetailedSpendingAccordion from "./DetailedSpendingAccordion";

function AccordionContainer({ responseData }) {
    
    

    return (
       <div>
            <h3>Spending by Category</h3>
            <DetailedSpendingAccordion/>
            <DetailedSpendingAccordion/>
            <DetailedSpendingAccordion/>
            <DetailedSpendingAccordion/>
            <DetailedSpendingAccordion/>
            <DetailedSpendingAccordion/>
       </div>
    );
    
  }

export default AccordionContainer;