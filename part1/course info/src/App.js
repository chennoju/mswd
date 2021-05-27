  
import React from 'react'

const App = () => {
  const c = 'HALF STACK APPLICATIONN DEVELOPMENT'
  const part1 = 'FUNDAMENTSALS OF REACT'
  const ex1 = 10
  const part2 = 'USING PROPS TO PASS DATA'
  const ex2 = 7
  const part3 = 'STATE OF A COMPONENT'
  const ex3 = 14

  return (
    <div>
      <h1>{c}</h1>
      <p>
        {part1} {ex1}
      </p>
      <p>
        {part2} {ex2}
      </p>
      <p>
        {part3} {ex3}
      </p>
      <p>Number of exercises</p>
      <center>
      <p> {ex1 + ex2 + ex3}</p></center>
    </div>
  )
}

export default App