import React from "react"
import { useState,useEffect} from 'react'
import axios from 'axios'
const Weather =({city}) =>{
    const api_key = process.env.REACT_APP_API_KEY
    const [Weat, setWeat] = useState({})
    const [hasCondition, setHasCondition] = useState(false);
    const url= "https://api.openweathermap.org/data/2.5/weather?q=".concat(city,"&appid=",api_key)
    // console.log(url)
    // console.log(city)
    useEffect(() => {
        axios
          .get(url)
          .then(response => {
            setWeat(response.data)
            setHasCondition(true)
            // console.log(response.data);
          })
      }, [])
     //console.log(Weat['wind'])
      const temperature=Weat['main']
      const windspeed=Weat['wind']

    return(
    <div>
        <p>temperature {hasCondition && (temperature.temp-273.15).toFixed(2)} Celsius</p>
        <img alt={"Weather icon"} src={hasCondition && `http://openweathermap.org/img/wn/${Weat.weather[0].icon}@2x.png`}/>
        <p>wind {hasCondition && windspeed.speed} m/s</p>
    </div>)
}
export default Weather