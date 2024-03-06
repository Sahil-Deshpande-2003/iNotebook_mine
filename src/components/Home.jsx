import React, { useContext } from 'react'
import noteContext from "../context/Notes/Notecontext"
import Notes from './Notes'
import Add_note from './Add_note'
export default function Home() {

    const a = useContext(noteContext)

    console.log("Printing a's notes in Home.jsx")

    console.log(a.notes)


  return (
    <div className='container'>
       

        <Add_note/>

        <h2>Your Notes</h2>
       
       <Notes/>
   
      
      
    </div>
  )
}
