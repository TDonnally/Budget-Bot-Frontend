import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { getCookie, setCookie } from "../../scripts/cookies";
import PlaidLink from "../PlaidLink";

function Settings({ responseData, parentLocation }) {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    // Add click event listeners to all option elements
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(function (button) {
      button.addEventListener('click', handleOptionClick);
    });
  }, []);

  // Function to handle the click event when an option is selected
  function handleOptionClick(event) {
    const selectedOption = event.target;
    const show = selectedOption.dataset.show;

    // Remove the 'hide' class from the element to show
    const showElement = document.querySelector(show);
    if (showElement) {
      showElement.classList.remove('hide');
    }

    // Add the 'hide' class to all other content divs
    const allContentDivs = document.querySelectorAll('.my-info-1 > div');
    allContentDivs.forEach(function (div) {
      if (div !== showElement) {
        div.classList.add('hide');
      }
    });

    // Update the active button
    setActiveButton(selectedOption);

    // Remove the 'selected' class from all other buttons
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(function (button) {
      if (button !== selectedOption) {
        button.classList.remove('selected');
      }
    });
  }

  return (
    <div>
      <div className="options">
        <div className={`option-button${activeButton === 'Account' ? ' selected' : ''}`} data-show=".account">Account Details</div>
        <div className={`option-button${activeButton === 'institutions' ? ' selected' : ''}`} data-show=".institutions">Institutions</div>
        <div className={`option-button${activeButton === 'Payment' ? ' selected' : ''}`} data-show=".payment">Payment Info</div>
        <div className={`option-button${activeButton === 'Budget' ? ' selected' : ''}`} data-show=".budget">Budget Allocation</div>
      </div>

      <div className="my-info-1">
        <div className={`account`}>Account</div>
        <div className={`institutions hide`}>Institutions</div>
        <div className={`payment hide`}>Payment</div>
        <div className={`budget hide`}>Budget</div>
      </div>
    </div>
  );
}

export default Settings;