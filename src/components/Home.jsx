import React, { useContext } from 'react'
import noteContext from "../context/Notes/Notecontext"
import Display_notes from './Display_notes'
import Add_note from './Add_note'
export default function Home() {

    const a = useContext(noteContext)

    console.log("Printing a's notes in Home.jsx")

    console.log(a.notes)


  return (
    <div className='container'>
       

        <Add_note/>

        <h2>Your Notes</h2>
        <div className="row">

        {a.notes.map((note)=>{

{console.log("Inside secret if")}

return <div className="col-md-4" key={note._id}>

  <Display_notes title={note.title} description={note.description} tag={note.tag} />

</div>
})}

          

    {/* {a.notes.title && a.notes.description && a.notes.tag && a.notes.map((note)=>{

      {console.log("Inside secret if")}

return <div className="col-md-4" key={note._id}>

        <Display_notes title={note.title} description={note.description} tag={note.tag} />

      </div>
    })} */}

    {/* <h2>No notes to display</h2> */}

</div>
     
   
      
      
    </div>
  )
}
