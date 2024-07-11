// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react';

// export default function CartCounter(props) {
//     let [counter, setCounter] = useState(1);

//     useEffect(() => {
//         props.onQuantityChange(counter);
//     }, [props.counter, props.onQuantityChange]);

//     const removeValue = () => {
//         if (counter === 1) return;

//         counter = counter - 1;
//         setCounter(counter)
//     }

//     const addValue = () => {
//         counter = counter + 1;
//         setCounter(counter)
//     }

//     return (

//         <div className="flex_class col-2">
//             <i onClick={removeValue} class="minus fa-solid fa-minus"></i>
//             <p>{counter}</p>
//             <i onClick={addValue} class="plus fa-solid fa-plus"></i>
//             <p class='price'>${props.price * counter}</p>
//         </div>
//     )
// }


// import React, { useState, useEffect } from 'react';

// export default function CartCounter({ price, quantity, onQuantityChange }) {
//   const [counter, setCounter] = useState(1);

//   useEffect(() => {
//     onQuantityChange();
//   }, [counter, onQuantityChange]);

//   const removeValue = () => {
//     if (counter === 1) return;
//     const newCounter = counter - 1;
//     setCounter(newCounter);
//     onQuantityChange(newCounter);
//   };

//   const addValue = () => {
//     const newCounter = counter + 1;
//     setCounter(newCounter);
//     onQuantityChange(newCounter);
//   };

//   return (
//     <div className="flex_class col-2">
//       <i onClick={removeValue} className="minus fa-solid fa-minus"></i>
//       <p>{counter}</p>
//       <i onClick={addValue} className="plus fa-solid fa-plus"></i>
//       <p className='price'>${(price * counter).toFixed(2)}</p>
//     </div>
//   );
// }

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
