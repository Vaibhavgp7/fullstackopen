import { useState ,useRef,useLayoutEffect} from 'react'
import Person from './components/Person'
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
  const [cursor, setCursor] = useState(null);
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
    setCursor(event.target.selectionStart)
    setNewFilter(event.target.value)
    const nf=event.target.value
    if (event.target.value === '' || event.target.value === ' ') {
      return}
    setFilteredPersons(persons.filter(person => person.name.match(new RegExp(nf,'i'))))
    
  }
  const ControlledInput = (props) => {
    const { value, onChange,cursor, ...rest } = props;
    
    const ref = useRef(null);
    
    useLayoutEffect(() => {
       const input = ref.current;
       if (input) {input.setSelectionRange(cursor, cursor) 
        input.focus()};
    }, [ref, cursor, value]);
    const handleChange = (e) => {
       setCursor(e.target.selectionEnd);
       onChange && onChange(e);
    };
 
    return <input ref={ref} value={value} onChange={handleChange} {...rest} />;
 }
 const personsToShow = (newFilter !== '') ?
    filteredPersons:
    persons 
  
const Filter = ({value,onChange,cursor}) =>
  <div>
    filter shown with <ControlledInput value={value} onChange={onChange} cursor={cursor}/>
  </div>

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter value={newFilter} onChange={handleFilterChange} cursor={cursor}/>
      </div>
      <h2>add a new</h2>
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
        
        {personsToShow.map(person => 
          <Person key={person.id} person={person} />
        )}
      </div>
    </div>
  )
}

export default App