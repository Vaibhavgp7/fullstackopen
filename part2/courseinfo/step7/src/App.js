const Header = (props) => {
  return (
  
      <h1>{props.name}</h1>
  )

}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => <Part key={part.id} part={part.name} exercise={part.exercises}/> )}
    </div>
  )
}

const Total =({parts}) => {
  return (
    <>
      <p><b>total of {parts.reduce((accumulator,part) => accumulator+part.exercises,0)} exercises</b></p>
    </>
  )
}

const Course = ({course}) => 
  <div>
    <Header name={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return(
  <div>
     <Course course={course} />
  </div>
  )
}

export default App