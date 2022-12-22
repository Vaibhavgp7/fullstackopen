import { useState} from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredPersons,setFilteredPersons] = useState([])
  const [newFilter,setNewFilter] = useState('')
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
  const handleFilterChange = (event) => {
    //setCursor(event.target.selectionStart)
    setNewFilter(event.target.value)
    const nf=event.target.value
    if (event.target.value === '' || event.target.value === ' ') {
      return}
    setFilteredPersons(persons.filter(person => person.name.match(new RegExp(nf,'i'))))
    
  }
  
 const personsToShow = (newFilter !== '') ?
    filteredPersons:
    persons 
  


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter value={newFilter} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <PersonForm onSubmit={addName} newName={newName} newNumber={newNumber} handleAddedName={handleAddedName} handleAddedNumber={handleAddedNumber}/>
      <h2>Numbers</h2>
      <div>
        <Person personsToShow={personsToShow}/>
      </div>
    </div>
  )
}

export default App