import React, { useState } from 'react'

export default function SubmitForm() {
    const[name, setName]=useState({Fristname:'',Surname:'', Lastname:''})

    function submit(e){
        e.perventDefault()
        console.log(name);
        
    }

  return (
    <div>
        <h1>{name.Fristname}-{name.Surname}-{name.Lastname}</h1>
        <form>
        <input  onChange={(e)=>setName({...name, Fristname:e.target.value})} />
        <input type="text" onChange={(e)=>setName({...name, Surname:e.target.value})}/>
        <input type="text"  onChange={(e)=>setName({...name, Lastname:e.target.value})}/>
        
        <button onClick={(e)=>submit(e)}>Submit</button>

        </form>
       
      
    </div>
  )
}
