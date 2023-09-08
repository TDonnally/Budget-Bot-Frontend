import React, { useState } from "react";
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { FaCaretDown, FaCaretUp } from "react-icons/fa6"

function DetailedSpendingAccordion({ responseData, openOnRender }) {
    const [isCardActive, setIsCardActive] = useState(openOnRender); // State to track card active state

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [37, 59, 50, 65, 90],
            backgroundColor: '#46C2CB',
            pointRadius: 0, // Set the point radius to 0 to hide data points
            pointHoverRadius: 0
          },
        ],
      };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
          scales: {
            x: {
              display: true, // Hide the x-axis
            },
            y: {
                display: true,
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

    // Function to toggle the card's active state
    const toggleCardActive = () => {
        setIsCardActive(!isCardActive);
    };

    // Define the class name based on the active state
    const cardClassName = `stats-summary-cards ${isCardActive ? 'active' : ''}`;

    return (
        <div className = "spending-accordion-container">
            <div className = {cardClassName}>
                <div className="accordion-card-header" onClick={toggleCardActive}>
                    <span>Entertainment</span>
                    <div>
                        <span>$232</span>
                        <FaCaretUp />
                    </div>
                </div>
                <div className= "accordion-card-body">
                    <div className="accordion-chart-container">
                        <Bar data={data} options={options} />
                    </div>
                    <div>
                        <div className = "accordion-body-head">
                            <h2>$243</h2>
                            <span><FaCaretDown/>$274</span>
                        </div>
                        <div className = "accordion-body-sub">
                            <h3>$102</h3>
                            <span>Average Spending</span>
                        </div>
                        <div className = "accordion-body-sub">
                            <h3>12%</h3>
                            <span>of monthly spending</span>
                        </div>
                    </div> 
                </div>
                
            </div>
        </div>
        
    );
    
  }

export default DetailedSpendingAccordion;