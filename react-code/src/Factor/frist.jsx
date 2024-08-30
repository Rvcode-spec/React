// Handle Multiple Events in React 

import React, { useState } from 'react'
export default function Frist() {

    const[count, setCount ] = useState(0);
    const[factor, setFactor]=useState(1);

    function Inc(){
        setCount(count+factor);
    }

    function Dec(){
        setCount(count-setFactor)
    }
        function Reset(){
            setCount(0);
        }



    function Incfactor(){
        setFactor(factor+1);
    }

    function Decfactor(){
        setFactor(factor-1)
    }

    function Resetfactor(){
        setFactor(0)
    }


    
  return (
    <div>
        <h1>The is Counter: {count}</h1>
        <button onClick={Inc}>Inc</button>
        <button onClick={Dec}>Dec</button>
        <button onClick={Reset}>Reset</button>

        <h1>The is factor:{factor}</h1>
        <button onClick={Incfactor}>Inc</button>
        <button onClick={Decfactor}>Dec</button>
        <button onClick={Resetfactor}>Reset</button>
      

    </div>
  )
}
