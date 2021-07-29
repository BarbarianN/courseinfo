import React from 'react'

const course = 'Half Stack application development'

const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


const Titulo = (promp) => {
  return (
    <h1>{promp.dtl}</h1>
  )
}

const Parts = (promp) => {
  const {part} = promp
  const {num1} = promp
  return (
    <p>
        {part} {num1}
      </p>
  )
}


const Total = (promp) => {
  const {e1} = promp
  const {e2} = promp
  const {e3} = promp
  return (
    <p>Number of exercises {e1 + e2 + e3}</p>
  )
}




const Main = () => {
  return(
    <div>
      <Titulo dtl={course}/>
      <Parts part={parts[0].name} num1={parts[0].exercises} />
      <Parts part={parts[1].name} num1={parts[1].exercises} />
      <Parts part={parts[2].name} num1={parts[2].exercises} />
      <Total e1={parts[0].exercises} e2={parts[1].exercises} e3={parts[2].exercises} />
    </div>
  )
}


const App = () => {

  return (
    <Main />
  )
}

export default App