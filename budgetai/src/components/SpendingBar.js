import React, { useRef, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { FaCaretUp } from "react-icons/fa";

function SpendingBar() {
    const chartRef = useRef(null);
    const [isComponentInView, setInComponentInView] = useState();
    const { ref, inView, entry } = useInView({
        threshold: .2,
        triggerOnce: true
        
      });

    useEffect(() => {
        setInComponentInView(inView);
    }, [inView]);

    const data = {
        labels: ['Groceries', 'Transportation', 'Housing', 'Entertainment', 'Healthcare'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)'],
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        
        elements: {
            bar: {
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'white',
                    weight: 'bold',
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                  color: 'white',
                  weight: 'bold'
                }
              },
          },
        responsive: true,
        plugins: {
            
            legend: {
                display: false,
                position: 'bottom',
                
            },
            title: {
                display: false,
            },
        },
    };

    return (
        <>
            <div ref = {ref}>
                <h3>Spending Breakdown</h3>
                {isComponentInView ? <Bar ref={chartRef} data={data} options={options} /> : <p>Loading...</p>}
            </div>
        </>
    );
}

export default SpendingBar;