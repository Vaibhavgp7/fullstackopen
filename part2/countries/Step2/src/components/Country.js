import React from "react"
const Country =({country}) =>
  <div>
    <h1>{country.name.common}</h1>
    <p>capital {country.capital}<br/>area {country.area}</p>
    <h3>languages:</h3>
    {/* //console.log({country.name.common}); */}
    <ul>
          {Object.values(country['languages']).map((data,index) => <li key={index}>{data}</li>)}
    </ul>
    <img src={country.flags.png} alt="Country flag"/>
  </div>

export default Country