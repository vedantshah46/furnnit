import React from 'react'

import Subscribe from './Subscribe'
import Footer from './Footer'
import ShopContactCommon from './ShopContactCommon'

export default function ContactUs() {
  return (
    <>
      <div className="ContactUs">
        <div className="contactUs_wrapper">
          <div className="contactUs_sec_one">
            <ShopContactCommon/>
          </div>

          <div className="contactUs_sec_two">
            <div className="contactUs_sec_two_left">
              <h2 className='contactUs_h2 fw-bold'>Frequently asked questions</h2>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      How to buy a product?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Dummy Content</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      How to buy a product?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Dummy Content</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      How to buy a product?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Dummy Content</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      How to buy a product?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Dummy Content</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contactUs_sec_two_right">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h5 className='fw-bold'>Contact Us</h5>
                  </div>
                  <div class="col-md-6">
                    <label for="" class="form-label">Your Name</label>
                    <input type="" class="form-control" id="" />
                  </div>
                  <div class="col-md-6">
                    <label for="" class="form-label">Your email</label>
                    <input type="" class="form-control" id="" />
                  </div>
                  <div className="comment">
                    <h5>Your Comment</h5>
                    <textarea class="form-control" aria-label="With textarea" placeholder='Write your review here'></textarea>
                  </div>
                  <div class="col-md-6">
                    <button type="button" class="btn btn-dark send_btn">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Subscribe/>
        </div>
        <Footer/>
      </div>
    </>
  )
}