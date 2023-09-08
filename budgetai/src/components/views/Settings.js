import React, { useState } from "react";
import axios from "axios"; 
import { getCookie, setCookie } from "../../scripts/cookies";
import PlaidLink from "../PlaidLink";
import NetWorthChart from "../NetWorthChart";
import AccountSummaries from "../AccountSummaries";
import BudgetSuggestionCarousel from "../BudgetSuggestionCarousel";
import MobileNav from "../MobileNav"
import SpendingBar from "../SpendingBar"
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';

function Settings({ responseData, parentLocation }) {
    const location = useLocation();
    console.log("Child: " ,location)
    return (
        <div>
            settings
            <div>
                <Link to="/account/settings/edit">
                    Edit Account Details
                </Link>
                <Link to="/account/settings/budget">
                    Edit Budget Allocation
                </Link>
                <Link to="/account/settings/institutions">
                    Institution Info
                </Link>
                <Link to="/account/settings/payment">
                    Payment Info
                </Link>
            </div>
            <div>
                <SwitchTransition>
                        <CSSTransition
                            key={location.key}
                            timeout={400}
                            classNames="page"
                            unmountOnExit
                        >
                            <Routes key = {location.key} location={ location }>
                                <Route path="edit" element={<AccountSummaries/>} />
                                <Route path="budget" element={<SpendingBar />} />
                                <Route path="institutions" element={<AccountSummaries/>} />
                                <Route path="payment" element={<SpendingBar />} />
                            </Routes>
                        </CSSTransition>
                    </SwitchTransition>
            </div>
            
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
    

export default Settings;