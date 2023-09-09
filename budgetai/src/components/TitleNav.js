import React, { useState } from "react";

function TitleNav(props) {
    return (
        <div>
            <div className = "stats-title">
                <h2>{ props.statsTitle }</h2>
            </div>
            <div className="stats-title-background"></div>
        </div>
        
        );
}


export default TitleNav;