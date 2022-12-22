import React from "react"
import Country from "./Country"
const Result = ({filteredCountries,setFilteredCountries}) => {
  if(filteredCountries.length>10)
  {
    console.log(filteredCountries.length);
    return(
      <p> Too many matches, specify another filter</p>
    )
  }
  else if(filteredCountries.length===1)
  {
    return(
      <Country country={filteredCountries[0]}/>
    )
  }
  else{
    return (
      <div>
        {filteredCountries.map((country, i) =>
          <div key={i}> {country.name.common} <button onClick={() => setFilteredCountries([country])}>show</button></div>
        )}
      </div>
    )
  }

}
  
export default Result