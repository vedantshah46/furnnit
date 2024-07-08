import React from 'react'
import edit from './Images/edit.svg';
import calender from './Images/calendar.svg';
import { Outlet, Link, useNavigate } from "react-router-dom";


// USED FOR PROPS, IMPORTED IN BLOG.JSX

export default function Blog_cards(props) {

    const handle = () =>{
        window.scrollBy(0,-3500);
    }

    return (
        <>
            <div class="card-group">
                <div class="card">
                    <img src={props.imgsrc} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="blog_card_title card-title fw-bold">Why should you choose good wood</h5>
                        <div className="edit_calender">
                            <img src={edit} alt="" />
                            <h6>By <br /> Admin</h6>
                            <img src={calender} alt="" />
                            <h6>December 10, <br />2022</h6>
                        </div>
                        <p class="blog_card_text card-text fw-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever.</p>


                        <Link to="/readMore">
                            <button onClick={handle} type="button" class="blog_button btn btn-light">Read More</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}