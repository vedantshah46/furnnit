import React from 'react'
import subscribe from './Images/subscribe.png';
export default function Subscribe() {
    return (
        <>
            <div className="subscribe">
                <div className="subscribe_wrapper">
                    <div className="subscribe_inner_wrapper">
                        <div className="subscribe_left">
                            <h1>Subscribe now and get 10% off all items</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div class="input input-group mb-3">
                                <input type="text" class="subscribe-cntrl form-control" placeholder="Your email here.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="subscribe_btn btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                        <div className="subscribe_right">
                            <img className='subscribe_right_img' src={subscribe} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}