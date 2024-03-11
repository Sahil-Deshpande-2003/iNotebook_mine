import React, { useState } from 'react'
import noteContext from './Notecontext'
export default function Notestate(props) {

  

    const [notes,setNotes] = useState([])



    const add_note = async(note)=>{

      // API CALL

      console.log("Inside notestate ka add_note")

      // console.log(note)

      let url = "http://localhost:3000/api/notes/addnote"

      const response = await fetch(url, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        // body: JSON.stringify(note), // IDK WHETHER TO DO body: JSON.stringify(note) OR body: JSON.stringify(note.title,note.desc,note.tag)
        body: JSON.stringify({title:note.title,description:note.description,tag:note.tag}), // IDK WHETHER TO DO body: JSON.stringify(note) OR body: JSON.stringify(note.title,note.desc,note.tag)
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      console.log("About to print the json fetched from API")
      console.log(json)
      console.log("About to print the note fetched from API")
      console.log(json.savedNote)
      
      setNotes(notes.concat(json.savedNote))
      console.log("About to print whole notes array")
      console.log(notes)

    }

    const delete_note = async(id)=>{

      console.log("Printing id of note to be deleted")

      console.log(id)

      let url = `http://localhost:3000/api/notes/deletenote/${id}`

      const response = await fetch(url, {

        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },



        
      });

      let json = await response.json()

      console.log("Printing response after API call")

      console.log(json)

      

      console.log("Printing original NOtes")

      console.log(notes)

      console.log("Printing id")

      console.log(id)

      const newNotes = notes.filter((note)=>{

        return note._id!=id
      })

      console.log("Printing new NOtes")

      console.log(newNotes)

      setNotes(newNotes)

    }

    // Fetch notes using GET /api/notes/getnote

    const fetch_note = async()=>{

      console.log("Inside fetch note function of notestate.jsx")

      let url = "http://localhost:3000/api/notes/getnote"

      const response = await fetch(url, {

        method: "GET",

        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      console.log("Printing notes after API call")
      console.log(json.notes)
      setNotes(json.notes)
    }

    const update_note = async(id,title,description,tag)=>{



      console.log("Inside updateNote function of Notestate.jsx")

      console.log("required id = " + id)

      let url = `http://localhost:3000/api/notes/updatenote/${id}`

      const response = await fetch(url, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },

        body: JSON.stringify({title,description,tag}),
        
      });

      const json = await response.json();
      console.log("About to print json after API Call")
      console.log(json.note)

      setNotes(json.note)
      
      let newNotes = JSON.parse(JSON.stringify(notes))

      for (let index = 0; index < newNotes.length; index++) {

          console.log("Current id = " + newNotes[index]._id)

          if (newNotes[index]._id === id){

            console.log("Original title = " + newNotes[index].title)
            console.log("New title = " + title)
            console.log("Original description = " + newNotes[index].description)
            console.log("New description = " + description)
            console.log("Original tag = " + newNotes[index].tag)
            console.log("New tag = " + tag)

            newNotes[index].title = title
            newNotes[index].description = description
            newNotes[index].tag = tag
            console.log("About to print updated note")
            console.log(newNotes[index])
            break
          }

        }


        setNotes(newNotes)

      }



        

   

    

  return (
    <div>

        <noteContext.Provider value={{notes,add_note,fetch_note,delete_note,update_note}}>
            {props.children}
        </noteContext.Provider>
      
    </div>
  )
}
