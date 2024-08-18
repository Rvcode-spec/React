import React, { useState } from 'react'

export default function FunComp() {
    const[count,setCount]=useState(0);

    const inc=()=>{

        setCount(count+1);
    }

    const dec=()=>{
        setCount(count-1);

    }

    const res=()=>{
        setCount(0);

    }
  return (
    <div>
        <h4>ues the Hook</h4>
        <p>{count}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={res}>Reset</button>
      
    </div>
  )
}
