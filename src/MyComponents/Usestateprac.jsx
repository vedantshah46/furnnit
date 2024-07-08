import React, { useState } from 'react'

const Usestateprac = () => {
    
    const [inputValue,newChangeValue] = useState("Vedant");
    console.log(inputValue);
  
    const onChange = (event) =>{
        const newval = event.target.value;
        newChangeValue(newval)
    }

    return (
    <div>
        <h1>{inputValue}</h1>
      <input type="text" value={inputValue} placeholder='Type Something' onChange={onChange} />
    </div>
  )
}

export default Usestateprac