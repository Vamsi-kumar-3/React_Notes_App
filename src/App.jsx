import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    setTitle("")
    setDetails("")
  }
  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
    
  }
 


  return (
    <div className='h-screen lg:flex  bg-[url("https://i.pinimg.com/736x/76/6f/36/766f368251aea15d13484a8b20c78e72.jpg")] text-white w-full p-10 '>
      <div className='flex flex-col lg:w-1/2'>
      <h1 className='text-2xl font-bold  uppercase mb-3'>Notes App</h1>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }} className='flex  flex-col '>
        <input type="text"
        placeholder='Enter Notes Heading' 
        className=' border-2 font-medium border-gray-500 outline-none rounded-md bg-transparent p-2 w-full mb-5'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea name=""
        placeholder='Enter Details'
        className=' border-2 font-medium border-gray-500 outline-none rounded-md  bg-transparent p-2 w-full'
        id="" value={details} onChange={(e) => setDetails(e.target.value)}> 
        </textarea>
        <input type="submit" value="Add Note" className='bg-blue-500 w-full active:scale-95 text-white p-2 rounded-md mt-5'/>
      </form>
      </div> 
      
      <div className='lg:w-1/2 ml-4   lg:border-l-2 p-10'>
        <h1 className='text-2xl font-bold uppercase'>Recent Notes</h1>
        <div className='flex flex-wrap gap-2 mt-2 overflow-auto h-[90%]'>
          {task.map(function(elem,idx){
            return (
              <div key={idx} className='h-52 w-40   items-start justify-start rounded-2xl text-black bg-cover bg-center bg-[url("https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_960_720.png")]  '>
                <h2 className='font-bold p-2 mt-5 text-2xl leading-tight'>{elem.title}</h2>
                <p className='p-2'>{elem.details}</p>

                  <button onClick={() => deleteNote(idx)}
                  
                  className='bg-red-500 w-full font-bold text-white cursor-pointer active:scale-95 text-xs p-2 rounded-xl mt-11  flex justify-center items-center'>Delete</button>
        </div>
            )
          })}
        
         
        

        </div>
        

      </div>
      
    </div>
  )
}

export default App
