import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

function Statistics({gud,bad,ntrul}){
  var average=(gud *1+bad * -1+ntrul *0)/(gud+ntrul+bad);
  var positive=(gud)/(gud+ntrul+bad)*100;
  
    if (gud > 0 || ntrul > 0 || bad > 0){
      return(
      
        
        <div>
           <h1>Statistics</h1>
            <table>
              <tbody>
         
          <Show a="GOOD" b={gud} />
            <Show a="NEUTRAL" b={ntrul} />
            <Show a="BAD" b={bad} />
            <Show a="ALL" b={gud+ntrul+bad}/>
            <Show a="AVERAGE" b={average} />
            <Show a="POSITIVE" b={ positive+"%"} />
        
        </tbody>

        
        </table>
        </div>
      )
     

    }
     
      
      return (
        <p>no Feedback DATA</p>
      )
    
     

  
  



}
function Show({a,b}){
  return(
    <tr>
    <td>{a}</td>
    <td>{b}</td>
  </tr>

  )

}
function Unicef(){
  const [gud,setGood]=useState(
    0
  )
  const [bad,setBad]=useState(
    0
  )
  const [ntrul,setNeutral]=useState(
    0
  )
  return (
    
    
      
    
    
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(gud + 1)}>good</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <button onClick={() => setNeutral(ntrul + 1)}>neutral</button>
    <Statistics gud={gud} bad={bad} ntrul={ntrul}></Statistics>
    
    
 
    </div>
    
  
  )



}

ReactDOM.render(
  <div>
      <Unicef/>
      

  </div>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();