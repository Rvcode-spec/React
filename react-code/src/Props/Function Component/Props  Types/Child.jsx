// import React from 'react'
// export default function Child(x) {
//   const data ="Ravi Shankar Singh"
//   return (
//     <div>
//         <h1>User Name :{x.name}</h1>
//         <p>------------------------------------------</p>
        
//         <h2>Data send to child to parent</h2>
//          <button onClick={()=>x.alert(data)}>Click me</button>

//     </div>
//   )
// }


import React from 'react'

export default function Child(x) {
  const Data="child to Parent"
  return (
    <div>
      <h3>Uers name : {x.name}</h3>
      <button onClick={()=>x.alert(Data)}>Click</button>
      
    </div>
  )
}
