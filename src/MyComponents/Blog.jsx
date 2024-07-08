import React from 'react'
import Blog_cards from './Blog_cards'
import blog_black_chair from './Images/blog_black_chair.png';
import blog_white_chair from './Images/blog_white_chair.png';
import blog_sofa from './Images/blog_sofa.png';

export default function Blog() {
    return (
        <>
            <p className='blog_p_center'>We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture</p>
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
        </>
    )
}
