import React, { useContext, useEffect } from 'react'
import noteContext from '../context/Notes/Notecontext'
import Noteitem from './Noteitem'
export default function Notes() {

  const a = useContext(noteContext)
  
  useEffect(()=>{

    a.fetch_note();

  },[])
  
  return (
    <div>

      <div className="row">

        {a.notes.map((note)=>{

          return <div className="col-md-4 my-2">

            <Noteitem title={note.title} description={note.description} tag={note.tag}/>
          </div>
        })}
      </div>
      
    </div>
  )
}
