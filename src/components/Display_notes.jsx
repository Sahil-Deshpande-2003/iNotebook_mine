import React, { useContext, useEffect } from 'react'
import noteContext from "../context/Notes/Notecontext"
export default function Display_notes(props) {

    const a = useContext(noteContext)

    // useEffect(()=>{

    //     console.log("Inside useEffect of display notes")

    //     a.fetch_note()
    // })

  return (
    <div>

<div className="card">

  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text">{props.tag}</p>
    <i className="fa-solid fa-trash mx-2"></i>
    <i className="fa-solid fa-pen-to-square mx-2"></i>

  </div>
</div>
      
    </div>
  )
}
