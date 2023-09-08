import React, { useState, useRef } from "react";
import axios from "axios";
import { getCookie, setCookie } from "../scripts/cookies";
import PlaidLink from "./PlaidLink";
import Home from "./views/Home";
import Settings from "./views/Settings";
import Stats from "./views/Stats";
import MobileNav from "./MobileNav";
import { Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function AccountView({ responseData }) {
    const location = useLocation();
    const locationArr = location.pathname?.split("/") ?? [];
    console.log(location);
    
    const isExactMatch =  ['/account/settings', '/account/home', '/account/spending'].includes(location.pathname);

    if (!responseData) {
        return <div>Loading...</div>;
    }

    if (responseData.needToken) {
        console.log(responseData);
        return (
            <div>
                <PlaidLink user={responseData.user.email} />
            </div>
        );
    } else {
        console.log(responseData.needToken);
        return (
            <div>
                <MobileNav/>
                <TransitionGroup>
                {isExactMatch && (
                    <CSSTransition
                        key={location.key}
                        timeout={400}
                        classNames="page"
                        unmountOnExit
                    >
                        <Routes location={location} key={locationArr[2]}>
                            <Route path="home" element={<Home responseData={responseData} />} />
                            <Route path="spending" element={<Stats responseData={responseData} />} />
                            <Route path="settings/*" element={<Settings responseData={responseData} parentLocation={location} />} />
                        </Routes>
                    </CSSTransition>
                )}
                {!isExactMatch && (
                        <Routes location={location} key={locationArr[2]}>
                            <Route path="home" element={<Home responseData={responseData} />} />
                            <Route path="spending" element={<Stats responseData={responseData} />} />
                            <Route path="settings/*" element={<Settings responseData={responseData} parentLocation={location} />} />
                        </Routes>
                )}
                
                </TransitionGroup>
            </div>
        );
    }
}

export default AccountView;