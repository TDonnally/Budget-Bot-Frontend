import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";


const sliderConfiguration= {
    autoplay: 1000,
  };

function BudgetSuggestionCarousel({ responseData }) {

const mainGlide = new Glide(".main__glide", sliderConfiguration); // default options

 useEffect(() => {
    mainGlide.mount();
    return () => mainGlide.destroy();
  }, [mainGlide]);

return (
  <div className="main__glide">
    <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
             1
         </li>
         <li className="glide__slide">
             2
         </li>
         <li className="glide__slide">
             3
         </li>
         <li className="glide__slide">
             4
         </li>
      </ul>
  </div>
  <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              prev
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              next
            </button>
          </div>
</div>
)
    
  }

export default BudgetSuggestionCarousel;