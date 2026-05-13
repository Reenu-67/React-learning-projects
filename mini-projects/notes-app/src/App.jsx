import React, { useState } from 'react'

const App = () => {

  const [notes, setNotes] = useState('')
  const [description, setDescription] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

   const copyTask = [...task];

    copyTask.push({ notes, description})

    setTask(copyTask)

    setNotes('')
    setDescription('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-gray-900 text-white'>
      

      <form onSubmit={(e) =>{
        submitHandler(e)
      }} className='flex gap-4 p-10 lg:w-1/2 flex-col items-start '>
        
        <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input 
        
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value)
        }}
        />

        <textarea  
        type="text"
        placeholder='Enter Notes Description' 
        className='px-5 w-full h-30 py-2 font-medium border-2 flex items-start flex-row outline-none rounded '
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
         />
          <button className='bg-white active:scale-95 w-full text-gray-900 px-5 py-2 font-medium outline-none rounded'>
            Add Note
          </button>
      
        {/* <img  className='h-8' src ="https://marketplace.canva.com/EAFwerOrTIE/1/0/566w/canva-pink-and-beige-doodle-illustrative-cute-playful-notes-document-Klsj3HTbA3U.jpg" alt="Notes" className='w-1/2 h-auto'/> */}
      </form>

      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.notes}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.description}</p>
              </div>

              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
