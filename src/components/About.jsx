import React, { useContext } from 'react'
import noteContext from "../context/Notes/Notecontext"
export default function About() {

    const a = useContext(noteContext)

  return (
    <div>
        This is about {a.state.name}
      
    </div>
  )
}
