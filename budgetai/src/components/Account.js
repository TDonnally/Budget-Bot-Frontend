import React, { useState } from "react";
import axios from "axios"; 
import { getCookie, setCookie } from "../scripts/cookies";
import PlaidLink from "./PlaidLink";
import Home from "./views/Home";
import Settings from "./views/Settings";
import Stats from "./views/Stats";
import {Route, Routes } from 'react-router-dom'

function AccountView({ responseData }) {
    if (!responseData) {
        return <div>Loading...</div>;
      }
    if (responseData.needToken){
        console.log(responseData);
        return (
            <div>
              <PlaidLink user = {responseData.user.email}/>
            </div>
          );
    }
    else{
      console.log(responseData.needToken);
        return (
            <div>
                <Routes>
                  <Route path="home" element={<Home responseData = {responseData}/>}/>
                  <Route path="spending" element={<Stats responseData = {responseData}/> } />
                  <Route path="settings" element={<Settings responseData = {responseData}/> } />
                </Routes>
                
              

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
    
  }

export default AccountView