import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { getCookie, setCookie } from "../../scripts/cookies";
import PlaidLink from "../PlaidLink";
import Home from "./Home";
import Settings from "./Settings";
import Stats from "./Stats";
import MobileNav from "../MobileNav";
import { Route, Routes, useLocation, BrowserRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function AccountView({ responseData }) {
    const location = useLocation();
    
    if (!responseData) {
        return <div>Loading...</div>;
    }

    if (responseData.needToken) {
        return (
            <div>
                <PlaidLink user={responseData.user.email} />
            </div>
        );
    } else{
        return (
            <div>
                <MobileNav/>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={400}
                        classNames="page"
                        unmountOnExit
                    >
                        <Routes location={location}>
                            <Route path="home" element={<Home responseData={responseData} />} />
                            <Route path="spending" element={<Stats responseData={responseData} />} />
                            <Route path="settings" element={<Settings responseData={responseData} />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default AccountView;