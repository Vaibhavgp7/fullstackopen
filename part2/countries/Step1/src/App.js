import { useState,useEffect} from 'react'
import axios from 'axios'
import React from 'react'
import Result from './components/Result'
import Filter from './components/Filter'
//import Country from './components/Country'
const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries,setFilteredCountries] = useState([])
  const [newFilter,setNewFilter] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const nf=event.target.value
    if (event.target.value === '' || event.target.value === ' ') {
      setFilteredCountries([])
      return}
    setFilteredCountries(countries.filter(country => country.name.common.match(new RegExp(nf,'i'))))
    
  }
  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Result filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries}/>
    </div>
  )
}

export default App