import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FaAngleLeft ,FaAngleRight } from "react-icons/fa";


const sliderConfiguration= {
    autoplay: 4000,
    type: 'carousel',
    startAt: 0,
    perView: 1,
    peek: 50,
    focusAt: 'center'
  };

function BudgetSuggestionCarousel({ responseData }) {

const mainGlide = new Glide(".main__glide", sliderConfiguration); // default options

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
                    <p>Your dining out expenses for this month totaled $600. Comparing this amount to your monthly income, it appears to be 15.6% higher than the recommended allocation for dining expenses. While indulging in dining experiences is enjoyable, it might be worth considering if there are ways to manage this expense in line with your financial goals.</p>
                </li>
                <li className="glide__slide">
                    <p>Your recent travel expenditures amounted to $800. When measured against your current income, this figure is 18.9% higher than the typically advised budget for travel. While exploring new destinations and experiences is exciting, it's a good opportunity to assess if there are potential adjustments that can help align your travel spending with your overall financial plan.</p>
                </li>
                <li className="glide__slide">
                    <p>Your clothing and accessories purchases for this period reached $300. Evaluating this spending against your income, it's evident that you've exceeded the recommended budget for such expenses by 10.8%. Keeping your style up-to-date can be enjoyable, but it's worth considering how you might strike a balance between expressing your personal fashion preferences and maintaining a prudent financial approach.</p>
                </li>
                <li className="glide__slide">
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