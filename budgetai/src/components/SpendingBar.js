import React, { useRef, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { FaCaretUp } from "react-icons/fa";

function SpendingBar(props) {
    const chartRef = useRef(null);
    const [isComponentInView, setInComponentInView] = useState();
    const [labelCategories, setLabelCategories] = useState();
    const [barChartData, setBarChartData] = useState();

    const { ref, inView, entry } = useInView({
        threshold: .2,
        triggerOnce: true

    });

    /*
        payment categories include:
            1. LOAN_PAYMENTS
            2. BANK_FEES
            3. ENTERTAINMENT
            4. FOOD_AND_DRINK
            5. GENERAL SERVICES
            6. PERSONAL_CARE
            7. GOVERNMENT_AND_NON_PROFIT
            8. TRANSPORTATION
            9. TRAVEL
            10. RENT_AND_UTILITIES
            11. NULL(OTHER)
    */
    useEffect(() => {
        const chartKVPs = {};
        const chartLabels = [];
        const chartData = [];
        const transactionsArray = props.transactionsArray[0].transactions;
        
        for(var i = 0; i < transactionsArray.length; i++){
            if
                (   
                    transactionsArray[i].personal_finance_category.primary != "INCOME" &&
                    transactionsArray[i].personal_finance_category.primary != "TRANSFER_IN" &&
                    transactionsArray[i].personal_finance_category.primary != "TRANSFER_OUT"
                ){
                    const category = transactionsArray[i].personal_finance_category.primary;
                    const amount = transactionsArray[i].amount;

                    // Check if the category exists in chartKVPs
                    if (chartKVPs.hasOwnProperty(category)) {
                    // Increment the existing value
                    chartKVPs[category] += amount;
                    } else {
                    // Add a new key-value pair
                    chartKVPs[category] = amount;
                    }

                    console.log(chartKVPs);
                    console.log(amount);
            }
            
        }
    }, []);
    
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