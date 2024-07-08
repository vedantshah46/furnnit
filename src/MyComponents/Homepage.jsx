import React from 'react'
import table from './Images/table_shop_now.png'
import chair from './Images/chair.png';
import lamp from './Images/lamp.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Carousel_one from './Carousel_one';
import Four_cards from './Four_cards';
import rocket from './Images/rocket.svg'
import security from './Images/security.svg';
import daysreturn from './Images/return.svg';
import call from './Images/call.svg';
import hall from './Images/hall.png';
import Blog from './Blog';
import Subscribe from './Subscribe';
import Footer from './Footer';
import Brands from './Brands';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <>
            <div class="shop_now">
                <div className="wrapper_shop_now">
                    <div className="shop_now_left">
                        <p>Interior Needs</p>
                        <h2 class="shop_now_para">Various new collections of furniture to decorate the corner of your house.</h2>
                        <Link to="/shop">
                            <button type="button" class="shop_now_button btn btn-dark">Shop Now</button>
                        </Link>
                    </div>
                    <div className="shop_now_right">
                        <img src={table} height="450" width="auto" alt="table" />
                    </div>
                </div>
            </div>

            <Brands />

            <div className="shopnow_cards">
                <div class="card_css card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-title">Living Room</p>
                                <h4 class="card-text">The best foam padded chair</h4>
                                <Link to="/shop">
                                    <button type="button" class="shop_now_button_section_three btn btn-dark">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={chair} class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="card_css card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-title">Living Room</p>
                                <h4 class="card-text">Latest model chandelier</h4>
                                <Link to="/shop">
                                    <button type="button" class="shop_now_button_section_three btn btn-dark">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={lamp} class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <Carousel_one />

            {/* <div class="pillow">
                <img class="pillow_absolute" src={pillows} alt="" height="500" />
                <div className="pillow_detail">
                    <h5>Interior Modern</h5>
                    <h2>Arrange your home in such a way <br/>with our modern interiors</h2>
                    <button type="button" class="shop_now_button_pillow_section btn btn-dark">Shop Now</button>
                </div>
            </div> */}

            <div className="section_seven">
                <div className="section_seven_wrapper">

                    <div className="section_seven_left">

                        <div className="section_seven_left_top">
                            <h1>We guarantee the safety of your shopping</h1>
                        </div>

                        <div className="section_seven_left_bottom">
                            <div className="section_seven_left_bottom_top">
                                <Four_cards
                                    imgsrc={rocket}
                                    title="Fast Shipping" />
                                <Four_cards
                                    imgsrc={security}
                                    title="Safe Delivery" />
                            </div>
                            <div className="section_seven_left_bottom_bottom">
                                <Four_cards
                                    imgsrc={daysreturn}
                                    title="365 Days Return" />
                                <Four_cards
                                    imgsrc={call}
                                    title="24 Hours CS"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="section_seven_right">
                        <img src={hall} class="hall" alt="" />
                    </div>
                </div>
            </div>
            {/* Section Seven Ends */}


            {/*Blog Section Starts */}
            <h1 className='blog_heading_center'>Read Our Latest Blog</h1>
            <Blog />
            {/*Blog Section Ends */}

            {/* Subscribe Section Starts */}
            <Subscribe />
            {/* Subscribe Section Ends */}

            {/* Footer Starts */}
            <Footer />
            {/* Footer Ends */}
        </>
    )
}