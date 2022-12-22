import { useState } from 'react'
import Person from './components/Person'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,number: '040-123456', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const addName = (event) => {
    if((persons.filter(person => person.name === newName)).length !== 0)
    {
      event.preventDefault()
      alert(`${newName} is already added to phonebook`);
    }
    else{
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }}
  const handleAddedName = (event) => {
    setNewName(event.target.value)
  }
  const handleAddedNumber = (event) => {
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
          onChange={handleAddedName}/>
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleAddedNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <Person key={person.id} person={person} />
        )}
      </div>
    </div>
  )
}

export default App