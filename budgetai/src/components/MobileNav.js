import React, { useState } from "react";
import { FaHouse, FaChartSimple, FaUser } from "react-icons/fa6";

function MobileNav() {
   
    return (
        <div className="mobile-nav-container">
            <div className="mobile-nav-check">
                <label htmlFor="check">
                    <input type="checkbox" id="check"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                    <div id = "icons-cover"></div>
                    <div className="mobile-nav">
                        <FaHouse/>
                        <FaChartSimple/>
                        <FaUser/>
                    </div>
                </label>
            </div>
            
        </div>
    );
    
  }

export default MobileNav;