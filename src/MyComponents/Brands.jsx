import React from 'react'
import logo1 from './Images/brand_1.svg';
import logo2 from './Images/brand_2.svg';
import logo3 from './Images/brand_3.svg';
import logo4 from './Images/brand_4.svg';
import logo5 from './Images/brand_5.svg';
import logo6 from './Images/brand_6.svg';


export default function Brands() {
    return (
        <div class="brands">
            <div className="brands_wrapper">
                <h6>Various brands have used our products</h6>

                <div className="brands_logo">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                </div>
            </div>
        </div>
    )
}
