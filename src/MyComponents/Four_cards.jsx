import React from 'react'


export default function Four_cards(props) {
    return (
        <>
        <img src={props.imgsrc} class="w-10 h-10 imgs" alt="" />
        <h5>{props.title}</h5>
        <p class="four_cards_p">Lorem Ipsum is simply dummy text of the<br></br> printing and typesetting industry Lorem Ipsum has</p>
        </>
    )
}
