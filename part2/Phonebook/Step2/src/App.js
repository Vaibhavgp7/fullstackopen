import { useState } from 'react'
import Person from './components/Person'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const addName = (event) => {
    if((persons.filter(person => person.name === newName)).length !== 0)
    {
      event.preventDefault()
      alert(`${newName} is already added to phonebook`);
    }
    else{
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }}
  const handleAddedName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </div>
    </div>
  )
}

export default App