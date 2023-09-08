import React, { useState } from "react";
import DetailedSpendingAccordion from "./DetailedSpendingAccordion";

function AccordionContainer({ responseData }) {
    
    

    return (
       <div>
            <h3>Spending by Category</h3>
            <DetailedSpendingAccordion openOnRender={true} />
            <DetailedSpendingAccordion openOnRender={false}/>
            <DetailedSpendingAccordion openOnRender={false}/>
            <DetailedSpendingAccordion openOnRender={false}/>
            <DetailedSpendingAccordion openOnRender={false}/>
            <DetailedSpendingAccordion openOnRender={false}/>
       </div>
    );
    
  }

export default AccordionContainer;