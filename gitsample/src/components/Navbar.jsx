import React from 'react'

const Navbar = (props) => {
  return (
    <>
    
    <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center items-center gap-4">
    {props.data.map(val=>{<p>name:{val.name}, age:{val.age}</p>
        console.log(`name:${val.name}, age:${val.age}`)})}

        {/* const ans={props.data.filter(val.age>20=>{console.log(`name:${val.name}, age:${val.age}`)})} */}
    </div>
    </>
  )
}

export default Navbar
