import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
const c = 'HALF STACK APPLICATIONN DEVELOPMENT'
  const parts = [
    {
      name: 'FUNDAMENTSALS OF REACT',
      ex: 10
    },
    {
      name: 'USING PROPS TO PASS DATA',
      ex: 7
    },
    {
      name: 'STATE OF A COMPONENT',
      ex: 14
    }
  ]
function Header(){
  return(
    <h1>{c}</h1>
  )
}
function Content({part}){
  return (
    <div>
      {part.map(part =>
        <div>
          <ul>
          <p>{part.name} -- {part.ex}</p> 
          </ul>
          
          </div>
        )}
    
    

</div>
  )}
  function Total({part}){
    var sum=0;
    part.map(part =>
      sum=sum+part.ex
      )
      return (
        <p>sum-----{sum}</p>
      )
  }


ReactDOM.render(
  <div>
      <Header/>
      <Content part={parts}/>
   <Total part={parts}/>

  </div>
  
   

 
   

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();