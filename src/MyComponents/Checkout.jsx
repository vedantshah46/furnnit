import React from 'react'
import chechout_instore from './Images/checkout_instore.svg';
import checkout_delivery from './Images/checkout_delivery.svg';
import checkout_visa from './Images/checkout_visa.png';
import checkout_gpay from './Images/checkout_gpay.svg';
import checkout_paypal from './Images/checkout_paypal.svg';
import Subscribe from './Subscribe';
import Footer from './Footer';


export default function Checkout() {
    return (
        <>
            <div className="checkout">
                <div className="checkout_wrapper">
                    <h1>Checkout</h1>

                    <div className="checkout_main_section">
                        <div className="checkout_form">
                            <h5 className='py-3 fw-bold'>Contact <br /> Information</h5>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="" class="form-label">First Name</label>
                                    <input type="" class="form-control" id="" />
                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Last Name</label>
                                    <input type="" class="form-control" id="" />
                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Phone</label>
                                    <input type="" class="form-control" id="" />
                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Email</label>
                                    <input type="" class="form-control" id="" />
                                </div>

                                <div className="shipping">
                                    <h4 className='fw-bold'>Shipping Methods</h4>
                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-light">
                                            <img src={chechout_instore} alt="" />
                                            Store
                                        </button>
                                        <button type="button" class="btn btn-light">
                                            <img src={checkout_delivery} alt="" />
                                            Delivery
                                        </button>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <label for="inputState" class="form-label">Country / Region</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>United States (US)</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>

                                <div className="add">
                                    <h5>Street address</h5>
                                    <textarea class="form-control" aria-label="With textarea" placeholder='Write your full address'></textarea>
                                </div>

                                <div class="col-md-12 lg-6">
                                    <h5>Payment Method</h5>
                                </div>

                                <div class="payment_buttons col-md-12 lg-4">
                                    <button><img src={checkout_visa} alt="" /></button>
                                    <button><img src={checkout_gpay} alt="" /></button>
                                    <button><img src={checkout_paypal} alt="" /></button>
                                </div>
                            </form>
                        </div>

                        <div className="checkout_total">
                            <h5 className='py-3 px-2 fw-bold'>Your Order</h5>

                            <div className="container">
                                <div className="row g-3">
                                    <div className="col-9">
                                        Complete set of sofa... 1x
                                    </div>
                                    <div className="col-3">
                                        $ 75.00
                                    </div>
                                    <div className="col-9">
                                        Teak wood chair 1x
                                    </div>
                                    <div className="col-3">
                                        $ 75.00
                                    </div>

                                    <div className="col-12">
                                        ------------------------------------------------
                                    </div>

                                    <div className="col-9">
                                        Subtotal
                                    </div>
                                    <div className="col-3">
                                        $ 99.0
                                    </div>
                                    <div className="col-9">
                                        Discount (30%)
                                    </div>
                                    <div className="col-3">
                                        -$ 29.70
                                    </div>

                                    <div className="col-12">
                                        ------------------------------------------------
                                    </div>

                                    <div className="col-9">
                                        Total
                                    </div>
                                    <div className="col-3">
                                        $ 69.30
                                    </div>

                                    <button className='place_order btn btn-dark' type="button">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    )
}
