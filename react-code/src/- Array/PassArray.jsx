import React from 'react'

export default function PassArray() {
  const name=["Rohit", "Roshan", 'Rinky', 'Punam']
  return (
    <div>
        {/* <h1>{name}</h1> */}

       {/* {name.map(name=>{
            return <h1>{name}</h1>
       })} */}

              {/* using by ul  & li */}

              <ol>
                  {name.map(name=>{
                    return <li>{name}</li>
                  })}
              </ol>
    </div>
  )
}
