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
    const paymentCategoriesMap = {
        "LOAN_PAYMENTS": "Loans",
        "BANK_FEES" : "Bank Fees",
        "ENTERTAINMENT" : "Entertainment",
        "FOOD_AND_DRINK" : "Food & Drink",
        "GENERAL_SERVICES" : "General Services",
        "PERSONAL_CARE": "Personal Care",
        "GOVERNMENT_AND_NON_PROFIT" : "Non-Profit",
        "TRANSPORTATION": "Transportation",
        "TRAVEL" : "Travel",
        "RENT_AND_UTILITIES" : "Bills",
        "GENERAL_MERCHANDISE" : "Shopping"
    }

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
        let items = [];
        
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
                    
                    // Create items array
                    items = Object.keys(chartKVPs).map(function(key) {
                        return [key, chartKVPs[key]];
                    });
                    
                    // Sort the array based on the second element
                    items.sort(function(first, second) {
                        return second[1] - first[1];
                    });

                    
                    console.log(items)
                    console.log(chartKVPs);
                    console.log(amount);
            }
            
        }
        for(var i = 0; i<items.length; i++){
            chartLabels.push(paymentCategoriesMap[items[i][0]])
            chartData.push(items[i][1])
        }
        setLabelCategories(chartLabels);
        setBarChartData(chartData);
    }, []);
    
    useEffect(() => {
        setInComponentInView(inView);
    }, [inView]);

    const data = {
        labels: labelCategories,
        datasets: [
            {
                data: barChartData,
                backgroundColor: ['rgba(250, 142, 178, 1)', 'rgba(250, 142, 178, .9)', 'rgba(250, 142, 178, .7)', 'rgba(250, 142, 178, .6)', 'rgba(250, 142, 178, .5)', 'rgba(250, 142, 178, .4)', 'rgba(250, 142, 178, .3)', 'rgba(250, 142, 178, .2)'],
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