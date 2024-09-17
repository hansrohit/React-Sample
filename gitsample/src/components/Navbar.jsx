import React from 'react'

const Navbar = (props) => {
  const users= props.data
  const ans=users.filter(data=>data.age>20)
  console.log(ans)
  const a="siva";
  // console.log(users)
  // users.map((user)=>{
  //   console.log(user)
  // })
  return (
    <>
    
      <ul className='bg-green-400'>
      {
        users.map((user,index)=>(
          <li key={index}> {user.name}</li>
        ))
      }
      
      </ul>
    {/* 23456 */}
    <div className="w-full h-[3vh] grad-blue-bg text-black flex justify-center items-center gap-4">
    <ul className='bg-violet-400'>
      {
        ans.map((user,index)=>(
          <li key={index}> {user.name}</li>
        ))
      }
      
      </ul>
    </div>
    </>
  )
}

export default Navbar
