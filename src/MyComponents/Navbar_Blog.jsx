import React from 'react'
import blog_black_chair from './Images/blog_black_chair.png';
import blog_white_chair from './Images/blog_white_chair.png';
import blog_sofa from './Images/blog_sofa.png';
import Blog_cards from './Blog_cards';
import navbar_blog_r2c1 from './Images/navbar_blog_r2c1.png';
import navbar_blog_r2c2 from './Images/navbar_blog_r2c2.png';
import navbar_blog_r2c3 from './Images/navbar_blog_r2c3.png';
import navbar_blog_r3c1 from './Images/navbar_blog_r3c1.png';
import navbar_blog_r3c2 from './Images/navbar_blog_r3c2.png';
import navbar_blog_r3c3 from './Images/navbar_blog_r3c3.png';
import Subscribe from './Subscribe';
import Footer from './Footer';

export default function Navbar_Blog() {
    return (
        <>
            <h1 className='blog_heading_center'>Read Our Latest Blog</h1>
            <p className='blog_p_center'>We write various things related to furniture, from tips and what things <br></br> I need to pay attention to when choosing furniture</p>
            <div className="wrapper_blog">
                <div className="cards_blog">
                    <Blog_cards
                        imgsrc={blog_black_chair}
                    />
                    <Blog_cards
                        imgsrc={blog_white_chair}
                    />

                    <Blog_cards
                        imgsrc={blog_sofa}
                    />
                </div>
            </div>

            <div className="wrapper_blog">
                <div className="cards_blog">
                    <Blog_cards
                        imgsrc={navbar_blog_r2c1}
                    />
                    <Blog_cards
                        imgsrc={navbar_blog_r2c2}
                    />

                    <Blog_cards
                        imgsrc={navbar_blog_r2c3}
                    />
                </div>
            </div>

            <div className="wrapper_blog">
                <div className="cards_blog">
                    <Blog_cards
                        imgsrc={navbar_blog_r3c1}
                    />
                    <Blog_cards
                        imgsrc={navbar_blog_r3c2}
                    />

                    <Blog_cards
                        imgsrc={navbar_blog_r3c3}
                    />
                </div>
            </div>

            <Subscribe/>
            <Footer/>
        </>
    )
}
