import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SubmitForm from './Input/SubmitForm';
import Toping from './ContextApi/Toping';
// import Parent from './Props/Function Component/Props  Types/Parent';
// import PassArray from './- Array/PassArray';
// import ArrayPrices from './- Array/ArrayPrices';
// import Frist from './Factor/CouFact';
// import Class from './Components/Class';
// import Function from './Components/Function';
// import ClassComp from './Counter App/ClassComp';
// import FunctionComp from './Counter App/Function-Comp';
// import FunComp from './Hooks/FunctionComp';
// import Funprops from './Props/Function Component/Funprops';
// import Classprop from './Props/Class Component/Classprop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Class/>
   <Function/>
   <ClassComp/>
   <FunctionComp/>
   <FunComp/> */}
   {/* <Funprops text={{name: "Ravi this is function component"}}/>
   <Classprop text={"Ravi this is Class Component"} /> */}
   {/* <Parent/> */}
   {/* <PassArray/> */}
   {/* <ArrayPrices/> */}
   {/* <Frist/> */}
    {/* <SubmitForm/> */}
    <Toping/>
  </React.StrictMode>
);

