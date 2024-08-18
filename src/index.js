import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Class from './Components/Class';
import Function from './Components/Function';
import ClassComp from './Counter App/ClassComp';
import FunctionComp from './Counter App/Function-Comp';
import FunComp from './Hooks/FunctionComp';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Class/>
   <Function/>
   <ClassComp/>
   <FunctionComp/>
   <FunComp/>
  </React.StrictMode>
);

