import React, { useState } from "react";
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import { FaCaretDown, FaCaretUp } from "react-icons/fa6"

function DetailedSpendingAccordion({ responseData }) {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [37, 59, 50, 65, 90],
            fill: false, // To make it a line instead of an area chart
            borderColor: '#46C2CB',
            pointRadius: 0, // Set the point radius to 0 to hide data points
            pointHoverRadius: 0
          },
        ],
      };
    const options = {
        plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
          scales: {
            x: {
              display: false, // Hide the x-axis
            },
            y: {
                display: false,
                suggestedMin: 0,
                grid: {
                    display: false, // Hide grid lines on the y-axis
                },
                suggestedMax: 50,
                ticks: {
                    display: false, // Hide y-axis ticks
                },
            },
          },
    };
    return (
        <div className = "spending-accordion-container">
            <h3>Spending by Category</h3>
            <div className = "stats-summary-cards">
                <div className="accordion-card-header">
                    <span>Entertainment</span>
                    <div>
                        <span>$232</span>
                        <FaCaretUp />
                    </div>
                </div>
                
            </div>
            <div className = "stats-summary-cards">
            </div>
            <div className = "stats-summary-cards"> 
            </div>
            <div className = "stats-summary-cards">
            </div>
            <div className = "stats-summary-cards"> 
            </div>
            <div className = "stats-summary-cards">
            </div>
        </div>
        
    );
    
  }

export default DetailedSpendingAccordion;