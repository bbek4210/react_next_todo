"use client"

import React, { useState }  from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])


  const submit=(e)=>{
   e.preventDefault()
   setmainTask([...mainTask,{title,desc}])
   
   settitle("")
   setdesc("") 

  };
   const deleteHandler = (index)=>{
    let copytask=[...mainTask]
    copytask.splice(index,1)
    setmainTask(copytask)

  }

  let renderTask = <h2>NO Task Available</h2>
  
   if (mainTask.length>0) {
    renderTask= mainTask.map((curElem,index)=>{
      return (
      <li key={index} className='flex items-center justify-between mb-8'>
        <div className='flex items-center  justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{curElem.title}</h5>
        <h6 className='text-lg font-medium'>{curElem.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(index);

      }} 
      className='bg-red-600 text-white rounded-lg font-bold px-4 py-2'>Delete</button>
      </li>
      )
   }
    )
  }

  return (
   <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'> MY Todolist</h1>
    <form onSubmit={submit}>
      <input type="text" className='text-2xl border-zinc-700 border-4 m-8 px-4 py-2' placeholder='Enter your TO-DO work' 
        value={title}
        onChange={(e)=>{
         settitle(e.target.value)
        }}
      />

      <input type="text" className='text-2xl border-zinc-700 border-4 m-8 px-4 py-2' placeholder='Enter title description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }} />

      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded-lg m-5'>Add Task</button>
    </form>
    <hr />
    <div className='p-8  bg-slate-400'>
    <ul>
      {renderTask}
    </ul>

    </div>
   </>
  )
}

export default page