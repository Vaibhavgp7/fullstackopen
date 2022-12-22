import { useState,useEffect} from 'react'
import axios from 'axios'
import React from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons,setFilteredPersons] = useState([])
  const [newFilter,setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

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