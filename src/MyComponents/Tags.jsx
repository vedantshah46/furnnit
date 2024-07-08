import React from 'react'
// import ShopData from './Data';



export default function Tags(props) {
    return (
        <>
            {/* <ul>
                {fliteredData.map(product => (
                    <li > {product.name} - ${product.price}</li>
                ))}
            </ul> */}

            {/* key={product.name} */}

            <h5 className='h5_tags'>Tags</h5>
            <div className="container">

                <div className="my-2 row">
                    <div className="col-3">
                        <button  onClick={() => props.filterProducts("chair")} class="btn-outline-dark tag_button btn ">Chair</button>
                    </div>
                    <div className="col-3">
                        <button  onClick={() => props.filterProducts("lamp")} class="btn-outline-dark tag_button btn">Lamp</button>
                    </div>
                    <div className="col-3">
                        <button onClick={() => props.filterProducts("bulb")} class="btn-outline-dark tag_button btn">Bulb</button>
                    </div>
                </div>

                <div className="my-2 row">
                    <div className="col-3">
                        <button onClick={() => props.filterProducts("sofa")} class="btn-outline-dark tag_button btn">Sofa</button>
                    </div>
                    <div className="col-3">
                        <button onClick={() => props.filterProducts("stool")} class="btn-outline-dark tag_button btn">Stool</button>
                    </div>
                    <div className="col-3">
                        <button class="btn-outline-dark tag_button btn">Clock</button>
                    </div>
                </div>

                <div className="my-2 row">
                    <div className="col-3">
                        <button class="btn-outline-dark tag_button btn">Pillow</button>
                    </div>
                </div>

            </div>
        </>
    )
}
