import React, { useState } from "react";
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import { FaCaretDown, FaCaretUp } from "react-icons/fa6"

function IACards({ responseData }) {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56],
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
        <div className = "ia-cards-container">
            <div className = "stats-summary-cards">
                <div>
                    <h2>$4,200</h2>
                    <span><FaCaretUp/>$543</span>
                </div>
                <span>Income Last Month</span>
                <div className = "ia-chart-container">
                    <Line data={data} options={options} />
                </div>
            </div>
            <div className = "stats-summary-cards">
                <div>
                    <h2>$2,211</h2>
                    <span><FaCaretDown/>$274</span>
                </div>
                <span>Spending Last Month</span>
                <div className = "ia-chart-container">
                    <Line data={data} options={options} />
                </div>
                
            </div>
        </div>
        
    );
    
  }

export default IACards;