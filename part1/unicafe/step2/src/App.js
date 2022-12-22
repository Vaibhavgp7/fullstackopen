import { useState } from 'react'
const Header =({name}) =>
  <h1>{name} </h1>

const Button =({onClick,text})=> (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <Header name="give feedback"/>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
      <Header name="statistics"/>
      <p> good {good}<br/>neutral {neutral}<br/>bad {bad}<br/>all {good+neutral+bad}<br/>average {(good-bad)/(good+neutral+bad)}<br/>positive {good*100/(good+neutral+bad)} %</p>
      
    </div>
  )
}

export default App