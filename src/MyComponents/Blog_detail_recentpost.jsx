import React from 'react'

export default function Blog_detail_recentpost(props) {
    return (
        <>
            <div class="blog_detail_recentpost container">
                <div class="row_padding row">
                    <div class="col-3">
                        <img class='abc' src={props.imgsrc} alt="" />
                    </div>
                    <div class="col-9">
                        <h6>How to choose a chair at home</h6>
                        <div class="col-12">December 27, 2021</div>
                    </div>
                </div>
            </div>
        </>
    )
}

