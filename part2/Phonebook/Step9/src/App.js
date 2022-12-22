import { useState,useEffect} from 'react'
import React from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons,setFilteredPersons] = useState([])
  const [newFilter,setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect(() => {
    //console.log('effect')
    personService
      .getAll()
      .then(initialpersons => {
        setPersons(initialpersons)
      })
  }, [])
  //console.log('render', persons.length, 'notes')

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
    
    personService
      .createperson(nameObject)
      .then(returnedNote => {
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
      })
    
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
 const deletePerson = (id) => {
  const persontodelete = persons.filter(person => person.id === id)
  if (window.confirm(`Delete ${persontodelete[0].name} ?`)) {
    personService
      .removeperson(persontodelete[0].id)
    console.log(`${persontodelete[0].name} successfully deleted`)
    setPersons(persons.filter(person => person.id !== persontodelete[0].id))

  }
}
 


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
        <Person deletePerson={deletePerson} personsToShow={personsToShow}/>
      </div>
    </div>
  )
}

export default App