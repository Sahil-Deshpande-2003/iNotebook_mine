import React, { useContext, useEffect } from 'react'
import noteContext from "../context/Notes/Notecontext"
export default function Noteitem(props) {

    const a = useContext(noteContext)

    const onClick = ()=>{

      a.delete_note(props.id)

    }



  return (
    <div>

<div className="card">

  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text">{props.tag}</p>
    <i className="fa-solid fa-trash mx-2" onClick={onClick}></i>
    <i className="fa-solid fa-pen-to-square mx-2"></i>

  </div>
</div>
      
    </div>
  )
}
