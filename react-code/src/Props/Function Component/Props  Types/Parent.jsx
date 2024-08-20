// import React from 'react'
// import Child from './Child'
// export default function Parent() {
//   let data1="Parent to child data send"

//   function Parentalert(data){
//     alert(data)
//   }
//   return (
//     <div>
//         <h1>Data send to Parent to child</h1>
//         <Child name={data1}/>
//         <Child alert={Parentalert}/>
      
//     </div>
//   )
// }

import React from 'react'
import Child from './Child'
export default function Parent() {
  let Data="Ravi Shankar"

  function Parentalert(Data){
    alert(Data)

  }
  

  return (
    <div>
      <h1>Data Send to Parent to child</h1>
      <Child name={Data}/>
      <Child alert={Parentalert}/>

    </div>
  )
}

