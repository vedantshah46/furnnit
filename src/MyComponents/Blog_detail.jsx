import React from 'react';
import edit from './Images/edit.svg';
import calender from './Images/calendar.svg';
import blog_detail_hall from './Images/blog_deatil_hall.png';
import blog_detail_section_one_left_photo1 from './Images/blog_detail_section_one_left_photo1.png';
import blog_detail_section_one_left_photo2 from './Images/blog_detail_section_one_left_photo2.png';
import blog_detail_section_one_left_photo3 from './Images/blog_detail_section_one_left_photo3.png';
import Blog_detail_recentpost from './Blog_detail_recentpost';
import rp_1 from './Images/r1_c1.png';
import rp_2 from './Images/rp_2.png';
import pillows from './Images/pillows.png';
import rp_4 from './Images/rp_4.png';
import gallery_1 from './Images/gallery_1.png';
import gallery_2 from './Images/gallery_2.png';
import gallery_3 from './Images/gallery_3.png';
import gallery_4 from './Images/gallery_4.png';
import Blog from './Blog';
import Subscribe from './Subscribe';
import Footer from './Footer';
import Tags from './Tags';


export default function Blog_detail() {
    return (
        <>
            <div className="blog_detail_header">
                <div className="blog_detail_header_wrapper">
                    <h1 className='pt-5'>Why should you choose good wood</h1>

                    <div className="blog_deatil_edit_calender">
                        <img src={edit} alt="" />
                        <h6>By Admin</h6>
                        <img src={calender} alt="" />
                        <h6>December 10,2022</h6>
                    </div>

                    <p className='pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

                    <div className="blog_detail_header_img">
                        <img src={blog_detail_hall} alt="" />
                    </div>
                </div>
            </div>

            <div className="blog_detail_section_one">
                <div className="blog_detail_section_one_wrapper">
                    <div className="blog_detail_section_one_left">
                        <h2>How to choose the best chair</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat ligula vivamus faucibus ac sociis cubilia neque, felis fringilla aenean hac eleifend tellus pellentesque quis suspendisse. Sociosqu suscipit sodales taciti rutrum condimentum conubia volutpat cubilia mi, velit curabitur consequat proin neque commodo interdum eleifend dui, ac magna leo ridiculus facilisi duis sapien etiam.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat ligula vivamus faucibus ac sociis cubilia neque.</p>

                        <img src={blog_detail_section_one_left_photo1} alt="" />

                        <p>Massa mus mattis natoque ante sapien venenatis nisl, mauris malesuada parturient fringilla dignissim tortor morbi, imperdiet quam faucibus id nunc cum. Suscipit lectus curae cum in taciti ullamcorper accumsan luctus, euismod ornare fames aenean ultrices odio ultricies et mus, gravida condimentum senectus hendrerit lobortis sociis quam. Blandit placerat cras suscipit egestas arcu nam ligula rhoncus, tortor purus proin nulla faucibus odio molestie semper, venenatis urna mollis libero praesent cum nec.</p>

                        <div className="blog_detail_section_one_left_flex_photos">
                            <img src={blog_detail_section_one_left_photo2} alt="" />
                            <img src={blog_detail_section_one_left_photo3} alt="" />
                        </div>

                        <div className="tags">
                            <h5>Tags:</h5>
                            <button type="button" class="btn btn-dark btn-sm">Chair</button>
                            <button type="button" class="btn btn-light btn-sm">Lamp</button>
                            <button type="button" class="btn btn-light btn-sm">Minimalist</button>
                        </div>

                        <div className="comment_section pt-5">
                            <h4>Leave a comment</h4>

                            <div className="comment_section_form">
                                <form class="row g-3 needs-validation" novalidate>
                                    <div className="input_flex">
                                        <div class="input_field col-md-4">
                                            <label for="validationCustom01" class="form-label">Your Name</label>
                                            <input type="text" class="form-control" id="validationCustom01" placeholder="Write your name here...." required />
                                        </div>
                                        <div class="input_field col-md-4">
                                            <label for="validationCustom02" class="form-label">Your Email</label>
                                            <input type="text" class="form-control" id="validationCustom02" placeholder="Write your email here...." required />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Your Comment</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Write your review here...."></textarea>
                                    </div>
                                    <div class="submit_button col-12">
                                        <button class="btn btn-dark" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="blog_detail_section_one_right">
                        <div className="search_bar">
                            <div class="find input-group mb-3">
                                <input type="text" class="subscribe-cntrl form-control" placeholder="Find Something" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="subscribe_btn btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>

                        <h5 className='h5_recentpost'>Recent Post</h5>

                        <Blog_detail_recentpost
                            imgsrc={rp_1}
                        />
                        <Blog_detail_recentpost
                            imgsrc={rp_2}
                        />
                        <Blog_detail_recentpost
                            imgsrc={pillows}
                        />
                        <Blog_detail_recentpost
                            imgsrc={rp_4}
                        />

                        <h5 className='h5_followus'>Follow Us</h5>

                        <div className="py-3 socialmedia_icons">
                            <a href="" class="bg me-4 text-reset">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="" class="bg me-4 text-reset">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="" class="bg me-4 text-reset">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="" class="bg me-4 text-reset">
                                <i class="fab fa-google"></i>
                            </a>
                        </div>

                        <h5 className='h5_ourgallery'>Our Gallery</h5>

                        <div className="container">
                            <div className="row">
                                <div className="gallery_row_padding col-md-5 col-sm-12 col-lg-4">
                                    <img className='gallery_img_size' src={gallery_1} alt="" />
                                </div>
                                <div className="gallery_row_padding col-md-5 col-sm-12 col-lg-4">
                                    <img className='gallery_img_size' src={gallery_2} alt="" />
                                </div>
                                <div className="gallery_row_padding col-md-5 col-sm-12 col-lg-4">
                                    <img className='gallery_img_size' src={gallery_3} alt="" />
                                </div>
                                <div className="gallery_bottom_row_padding col-md-5 col-sm-12 col-lg-4">
                                    <img className='gallery_img_size' src={gallery_4} alt="" />
                                </div>
                                <div className="gallery_bottom_row_padding col-md-5 col-sm-12 col-lg-4">
                                    <img className='gallery_img_size' src={rp_4} alt="" />
                                </div>
                            </div>
                        </div>

                        <Tags />

                    </div>
                </div>
            </div>

            <h1 className='blog_heading_center'>Other Blogs</h1>
            <Blog />

            <Subscribe />
            <Footer />
        </>
    )
}
