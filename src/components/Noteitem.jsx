import React, { useContext, useEffect, useState } from 'react'
import noteContext from "../context/Notes/Notecontext"
export default function Noteitem(props) {

    const a = useContext(noteContext)

    const [note,setNote] = useState({title:"",description:"",tag:""})

    const delete_click = (curr_note)=>{

      console.log("Inside delete_click")

      console.log("Printing curr_note inside delete_click")

      console.log(curr_note)

      a.delete_note(curr_note._id)
    }



  return (
    <div>

<div className="card">

  <div className="card-body">
    <h5 className="card-title">{props.note.title}</h5>
    <p className="card-text">{props.note.description}</p>
    <p className="card-text">{props.note.tag}</p>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{delete_click(props.note)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>props.display_update_note(props.note)}></i>

  </div>
</div>
      
    </div>
  )
}
