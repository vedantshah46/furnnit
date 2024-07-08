import React, { useState } from 'react';
import r1_c1 from './Images/r1_c1.png';
import r1_c2 from './Images/r1_c2.png';
import r1_c3 from './Images/r1_c3.png';
import r1_c4 from './Images/r1_c4.png';
import r2_c1 from './Images/r2_c1.png';
import r2_c2 from './Images/r2_c2.png';
import r2_c3 from './Images/r2_c3.png';
import r2_c4 from './Images/r2_c4.png';
import shop_lamp from './Images/shop_lamp.png';

const ShopData = [
    { imgsrc: r1_c1, place: "Living Room", name: "Teak Wood Chair", price: 25 },
    { imgsrc: r1_c2, place: "Living Room", name: "Teak Wood Chair", price: 26 },
    { imgsrc: r1_c3, place: "Living Room", name: "Teak Wood Chair", price: 24 },
    { imgsrc: r1_c4, place: "Living Room", name: "Teak Wood Chair", price: 24 },
    { imgsrc: r2_c1, place: "Living Room", name: "Teak Wood Chair", price: 24 },
    { imgsrc: r2_c2, place: "Living Room", name: "Teak Wood Chair", price: 24 },
    { imgsrc: r2_c3, place: "Living Room", name: "Teak Wood Chair", price: 24 },
    { imgsrc: r2_c4, place: "Living Room", name: "Teak Wood Chair", price: 24 },
    { imgsrc: shop_lamp, place: "Living Room", name: "Teak Wood Chair", price: 24 }
];

const Test = () => {
    const [products, setProducts] = useState(ShopData);
    const [isFiltered, setIsFiltered] = useState(false);

    const filterProducts = () => {
        if (isFiltered) {
            setProducts(ShopData);
        } else {
            const filtered = ShopData.filter(product => product.price > 25);
            setProducts(filtered);
        }
        setIsFiltered(!isFiltered);
    };

    return (
        <div>
            <button onClick={filterProducts}>{isFiltered ? "Show All" : "Filter Products"}</button>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-card">s
                        <img src={product.imgsrc} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.place}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Test;
