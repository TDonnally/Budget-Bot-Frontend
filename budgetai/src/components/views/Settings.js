import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { getCookie, setCookie } from "../../scripts/cookies";
import PlaidLink from "../PlaidLink";
import { FaUserPen, FaBuildingColumns, FaRegCreditCard, FaMoneyBills } from "react-icons/fa6";
import TitleNav from "../TitleNav";
import AccountSettings from "../forms/AccountSettings";
import InstitutionSettings from "../forms/InstitutionSettings";
import PaymentSettings from "../forms/PaymentSettings";
import BudgetSettings from "../forms/BudgetSettings";
import SignOut from "../SignOut";

function Settings(props) {
    const [activeButton, setActiveButton] = useState('.account');
    let spendingPercents = props.responseData.spendingPercents;

    useEffect(() => {
        //open account details tab
        const initOpenElement = document.querySelector(activeButton)
        initOpenElement.classList.remove('hide');
        // Add click event listeners to all option elements
        const optionsContainer = document.querySelector('.options');
        optionsContainer.addEventListener('click', handleOptionClick);

        // Cleanup the event listener when the component unmounts
        return () => {
            optionsContainer.removeEventListener('click', handleOptionClick);
        };
       
    }, []);


    // Function to handle the click event when an option is selected
    function handleOptionClick(event) {
        const selectedOption = event.target.closest('.option-button');

        if (!selectedOption) {
            return; // If no 'option-button' was clicked, do nothing
          }

        //selectedOption.classList.add("active");
        const show = selectedOption.dataset.show;

        // Remove the 'hide' class from the element to show
        const showElement = document.querySelector(show);
        if (showElement) {
            showElement.classList.remove('hide');
        }

        // Add the 'hide' class to all other content divs
        const allContentDivs = document.querySelectorAll('.option > div');
        allContentDivs.forEach(function (div) {
            if (div !== showElement) {
            div.classList.add('hide');
            }
        });

        // Update the active button
        setActiveButton(selectedOption.dataset.show);

        // Remove the 'selected' class from all other buttons
        const optionButtons = document.querySelectorAll('.option-button');
        optionButtons.forEach(function (button) {
            if (button !== selectedOption) {
            button.classList.remove('active');
            }
        });
    }

  return (
    <div>
        <p style = {{fontSize: '0px'}}>Stats</p>
        <TitleNav statsTitle='Settings' />
        <div className="settings-control-container">
            <div className="options">
                <div className={`option-button${activeButton === '.account' ? ' selected' : ''}`} data-show=".account">
                    <FaUserPen/>
                    <span>Account Details</span>
                </div>
                <div className={`option-button${activeButton === '.institutions' ? ' selected' : ''}`} data-show=".institutions">
                    <FaBuildingColumns/>
                    <span>Institutions</span>
                </div>
                <div className={`option-button${activeButton === '.payment' ? ' selected' : ''}`} data-show=".payment">
                    <FaRegCreditCard/>
                    <span>Payment Info</span>
                </div>
                <div className={`option-button${activeButton === '.budget' ? ' selected' : ''}`} data-show=".budget">
                    <FaMoneyBills/>
                    <span>Budget Allocation</span>
                </div>
            </div>

            <div className="option">
                <div className={`account hide`}>
                    <AccountSettings columnToUpdate = "email" fieldTitle = "Email" currentValue = { getCookie('email') } />
                    <SignOut />
                </div>
                <div className={`institutions hide`}>
                    <InstitutionSettings />
                </div>
                <div className={`payment hide`}>
                    <PaymentSettings />
                </div>
                <div className={`budget hide`}>
                    <AccountSettings columnToUpdate = "spendingPercents" fieldTitle = "Monthly Savings" currentValue = { spendingPercents.savings } fieldJSON = {spendingPercents} />
                </div>
            </div>
        </div>     
    </div>
  );
}

export default Settings;