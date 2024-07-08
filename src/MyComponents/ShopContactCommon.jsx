import React from 'react'
import contactus_bgimg from './Images/contactus_bgimg.png'

export default function ShopContactCommon() {
    return (
        <div className="contactUs_sec_one_left">
            <img src={contactus_bgimg} alt="" />

            <div className="contactUs_sec_one_left_details">
                <h5 className='fw-bold'>Best Room Decor Items</h5>
                <h1 className='text-light fw-bold'>Our goods have the best quality and materials in the world</h1>
                <button type="button" class="btn btn-light fw-bolder">Shop Now</button>
            </div>

        </div>
    )
}
