import React, { useState, useEffect } from 'react';

export default function CartCounter({ price, onQuantityChange }) {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        onQuantityChange(counter);
    }, [counter, onQuantityChange]);

    const removeValue = () => {
        if (counter === 1) return;
        setCounter(counter - 1);
    }

    const addValue = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="flex_class col-2">
            <i onClick={removeValue} className="minus fa-solid fa-minus"></i>
            <p>{counter}</p>
            <i onClick={addValue} className="plus fa-solid fa-plus"></i>
            <p className='price'>${(price * counter).toFixed(2)}</p>
        </div>
    );
}
