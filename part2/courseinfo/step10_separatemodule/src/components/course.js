const Header = (props) => {
    return (
    
        <h2>{props.name}</h2>
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
  
  const Course = ({courses}) => 
    <div>
      {courses.map((course) =>
        <div key={course.id}>
          
          <Header name={course.name}/>
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )}
    </div>

export default Course