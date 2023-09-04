import React, { useRef, useEffect } from "react";
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { FaCaretUp } from "react-icons/fa";

function SpendingBar() {
    const chartRef = useRef(null);
    
    useEffect(() => {
        
      }, []);
    
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
            borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
            position: 'right',
            },
            title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
            },
  },
    };
    

    return (
        <div>
            <div>
                <Bar ref={chartRef}data={data} options={options} />
            </div>
        </div>
    );
}

export default SpendingBar;