import React from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const data=[
    {
    name:"hans rohit",
    age:19
  },
    {
    name:"Arjun das",
    age:38
  },
    {
    name:"Leo",
    age:10
  }
]
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <Navbar data={data}/>
    </div>
  )
}

export default App
