import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FaAngleLeft ,FaAngleRight } from "react-icons/fa";


const sliderConfiguration = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    peek: 50,
    focusAt: 'center'
  };

function BudgetSuggestionCarousel(props) {

const mainGlide = new Glide(".main__glide", sliderConfiguration); // default options

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
}, [])

useEffect(() => {
    mainGlide.mount();
    return () => mainGlide.destroy();

}, [mainGlide]);

return (
    <div className = "slider-container">
        <h3>Spending Suggestions</h3>
        <div className="main__glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                <li className="glide__slide">
                    <div className = "glide__slide__border"></div>
                    <p>Your dining out expenses for this month totaled $600. Comparing this amount to your monthly income, it appears to be 15.6% higher than the recommended allocation for dining expenses. While indulging in dining experiences is enjoyable, it might be worth considering if there are ways to manage this expense in line with your financial goals.</p>
                </li>
                <li className="glide__slide">
                    <div className = "glide__slide__border"></div>
                    <p>Your recent travel expenditures amounted to $800. When measured against your current income, this figure is 18.9% higher than the typically advised budget for travel. While exploring new destinations and experiences is exciting, it's a good opportunity to assess if there are potential adjustments that can help align your travel spending with your overall financial plan.</p>
                </li>
                <li className="glide__slide">
                    <div className = "glide__slide__border"></div>
                    <p>Your clothing and accessories purchases for this period reached $300. Evaluating this spending against your income, it's evident that you've exceeded the recommended budget for such expenses by 10.8%. Keeping your style up-to-date can be enjoyable, but it's worth considering how you might strike a balance between expressing your personal fashion preferences and maintaining a prudent financial approach.</p>
                </li>
                <li className="glide__slide">
                    <div className = "glide__slide__border"></div>
                    <p>Your recent entertainment and hobbies spending amounts to $250. When compared with your monthly earnings, this expenditure surpasses the advised allocation by 8.2%. While pursuing leisure activities and hobbies is a valuable way to unwind, it's wise to assess how you can maintain your interests while also ensuring your financial wellness remains a priority.</p>
                </li>
            </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
                    <button
                    className="glide__arrow glide__arrow--left"
                    data-glide-dir="<"
                    >
                    <FaAngleLeft/>
                    </button>
                    <button
                    className="glide__arrow glide__arrow--right"
                    data-glide-dir=">"
                    >
                    <FaAngleRight/>
                    </button>
                </div>
        </div>
    </div>
)
    
  }

export default BudgetSuggestionCarousel;