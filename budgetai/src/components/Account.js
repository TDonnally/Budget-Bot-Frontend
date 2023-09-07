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
    const [viewLoaded, setViewLoaded] = useState(false);
    const nodeRef = useRef(null);

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
                    <CSSTransition
                        key={location.key}
                        timeout={10000}
                        classNames="page"
                        unmountOnExit
                    >
                        <Routes location={location}>
                            <Route path="home" element={<Home responseData={responseData}/>} />
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