import { useState } from 'react'
const Header =({name}) =>
  <h1>{name} </h1>

const Button =({onClick,text})=> (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics =({good,neutral,bad})=> {
  const all=good+neutral+bad
  const average=(good-bad)/all
  const positive=(good*100)/all

  return (
  <p> good {good}<br/>neutral {neutral}<br/>bad {bad}<br/>all {all}<br/>average {average}<br/>positive {positive} %</p>)
  

}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App