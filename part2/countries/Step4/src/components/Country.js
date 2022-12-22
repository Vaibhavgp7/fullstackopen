import React from "react"
import Weather from './Weather'
const Country =({country}) =>
  <div>
    <h1>{country.name.common}</h1>
    <p>capital {country.capital}<br/>area {country.area}</p>
    <h3>languages:</h3>
    <ul>
          {Object.values(country['languages']).map((data,index) => <li key={index}>{data}</li>)}
    </ul>
    <img src={country.flags.png} alt="Country flag"/>
    <h2>Weather in {country.capital}</h2>
    <Weather city={country.capital}/>
  </div>

export default Country