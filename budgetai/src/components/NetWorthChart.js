import React, { useRef, useEffect } from "react";
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';

function NetWorthChart() {
    const chartRef = useRef(null);
    
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
            <h2>$123,435</h2>
            <div className="chart-container">
                <Line ref={chartRef}data={data} options={options} />
            </div>
        </div>
    );
}

export default NetWorthChart;