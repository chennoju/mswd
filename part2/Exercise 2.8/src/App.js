import React, {useState} from 'react'

const Person = ({ identify }) => {
  return (
    <div>
      
      &nbsp;&nbsp;{identify.content} 
      &nbsp;&nbsp;{identify.number}

    </div>
  )
}

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons)
  const [ newName, setNewName ] = useState('')
  const [number, setNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if ( persons.find(person=>person.content===newName ) ) 
    {
      window.alert(newName + ' is already added to phonebook');
    }
  else
  {
    const nameObject = 
    {
      content: newName,
      number: number,
      id: persons.length + 1,
    }
  
  setPersons(persons.concat(nameObject))
  }
  
    setNewName('')  
    setNumber('')  
  
  
  }
  const namesToShow = persons


 
  
  
  return (
    <div>
      <h2>&nbsp;&nbsp;Phonebook</h2>
      <form onSubmit={addName}>
        <div>
         &nbsp;&nbsp;&nbsp;name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input  value={newName} onChange={handleNameChange}/><br />
          <br></br>&nbsp;&nbsp;&nbsp;number: &nbsp;&nbsp;&nbsp;&nbsp; <input type='tel' pattern="[0-9\-]+" value={number} onChange={handleNumberChange}/>
        </div>
        <div>
        <br></br>&nbsp;&nbsp;&nbsp;<button type="submit">add</button>
        </div>
      </form>
      <h2>&nbsp;&nbsp;Numbers</h2>
      {namesToShow.map(identify =>
          <Person key={identify.id} identify={identify} />
        )}
      

    </div>
  )
}

export default App