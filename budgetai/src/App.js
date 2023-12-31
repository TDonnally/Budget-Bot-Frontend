import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/forms/SignUpForm.js'
import SignInForm from './components/forms/SignInForm.js'
import AccountView from './components/views/Account';
import Protected from './scripts/WithAuth.js';
import React, { useState, useEffect } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";

import { getCookie } from "./scripts/cookies.js";
import { withAuth } from './scripts/WithAuth.js';

function App() {
  const currentUrl = window.location.pathname
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.text())
      .then((text) => setMessage(text))
  }, []);

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUpForm/>}/>
            <Route path="/signin" element={<SignInForm/> } />
            <Route path="/account/*" element={
              <Protected token={getCookie("token")}>
                <AccountView/>
              </Protected>
            }
            />
        </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
