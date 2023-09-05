import React, { useState } from "react";
import { FaHouse, FaChartSimple, FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

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
                        <Link to="/account/home">
                            <FaHouse/>
                        </Link>
                        <Link to="/account/spending">
                            <FaChartSimple/>
                        </Link>
                        <Link to="/account/settings">
                            <FaUser/>
                        </Link>
                        </div>
                </label>
            </div>
            
        </div>
    );
    
  }

export default MobileNav;