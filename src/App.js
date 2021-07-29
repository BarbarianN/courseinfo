import React from 'react'

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


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Titulo dtl={course}/>
      <Parts part={part1} num1={exercises1} />
      <Parts part={part2} num1={exercises2} />
      <Parts part={part3} num1={exercises3} />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App