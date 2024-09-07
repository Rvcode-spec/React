import React from 'react'
import Toping from './Toping'
import page from './Pages/page'
const App = () => {
    const  Top =createContext()
  return (
    <div>
      <Top.Provider>
        <page/>
        </Top.Provider>
        <Toping/>
    </div>
  )
}

export default App

// export Top;
