import React, { useRef, useEffect } from "react";
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import { FaCaretUp } from "react-icons/fa";

function NetWorthChart() {
    const chartRef = useRef(null);
    
    useEffect(() => {
        const marginDistance = document.querySelector(".chart-container").offsetHeight;
        const accountSummary = document.querySelector(".account-summary");
        accountSummary.style.marginTop = marginDistance + 120 + "px"
      }, []);
    

    function updateTitleHeight(scrollPos){{
        const scrollDistance = document.querySelector(".chart-container").offsetHeight;
        const netWorthContainer = document.querySelector(".net-worth-container");
        const netWorthContainerBackground = document.querySelector(".net-worth-container-background");
        if(scrollPos>1 && scrollPos<scrollDistance){
            netWorthContainerBackground.style.opacity=scrollPos/scrollDistance;
            netWorthContainer.firstChild.style.fontSize = 70-(scrollPos/scrollDistance)*30 + "px"
            netWorthContainer.firstChild.style.marginTop = (scrollPos/scrollDistance)*10 + "px"
            netWorthContainer.children[1].style.marginTop = (scrollPos/scrollDistance)*10 + "px"
        }
    }}

    let ticking = false;
    let pageScrollPosition = window.scrollY;

    document.addEventListener("scroll", (event) => {
        pageScrollPosition = window.scrollY;
      
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateTitleHeight(pageScrollPosition);
            ticking = false;
          });
      
          ticking = true;
        }
    });
    const data = {
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                id: 1,
                fill: "origin",
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                        return null;
                    }
                    const gradient = ctx.createLinearGradient(
                        chartArea.left,
                        chartArea.bottom,
                        chartArea.left,
                        chartArea.top
                    );
                    gradient.addColorStop(0, "rgba(75, 192, 192, 0)");
                    gradient.addColorStop(1, "rgba(75, 192, 192, 1)");
                    return gradient;
                },
                borderColor: "rgba(75, 192, 192, 0)",
                label: "",
                data: [65, 59, 67, 52, 48, 55],
                pointRadius: [0, 0, 0, 0, 0, 0]
            },
            {
                id: 2,
                fill: "-1",
                backgroundColor: "rgb(255, 255, 255)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 4,
                label: "",
                data: [65, 59, 67, 52, 48, 55],
                pointRadius: [0, 0, 0, 0, 0, 5], // Set pointRadius to 5 for the last data point
            },
        ],
    };

    const options = {
        /*onHover: function (e, item) {
            const chart = chartRef.current
            //console.log(e);
            console.log("MouseX: ", e.x, "MouseY:", e.y);
            console.log(chart);
        },*/
        interaction: {
            mode: 'index',
            intersect: false,
          },
        animation: {
            duration: 0,
            easing: "easeInOutQuad"
        },
        scales: {
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
            filler: {
                propagate: false,
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
            tooltip: {
                enabled: false,
                position: 'nearest'
            },
        },
    };
    

    return (
        <div>
            <div className = "net-worth-container">
                <h2>$123,435</h2>
                <span><FaCaretUp/> $35,000</span>
            </div>
            <div className = "net-worth-container-background">
            </div>
            <div className="chart-container">
                <Line ref={chartRef}data={data} options={options} />
            </div>
        </div>
    );
}

export default NetWorthChart;