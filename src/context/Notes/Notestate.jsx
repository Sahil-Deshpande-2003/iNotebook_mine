import React, { useState } from 'react'
import noteContext from './Notecontext'
export default function Notestate(props) {

    const note_array = [
        {
            "_id": "65e64294a67f840ed027c882",
            "user": "65e5f4efb3b2c1da09aaa224",
            "title": "Racing_updated",
            "description": "F1 Racing_updated",
            "tag": "Cars_updated",
            "date": "2024-03-04T21:52:20.698Z",
            "__v": 0
          },
          {
            "_id": "65e79d8bc6d3c8b2b40f9eb8",
            "user": "65e5f4efb3b2c1da09aaa224",
            "title": "Grocery",
            "description": "Big Basked",
            "tag": "General",
            "date": "2024-03-05T22:32:43.585Z",
            "__v": 0
          },
          {
            "_id": "65e79da8c6d3c8b2b40f9ebc",
            "user": "65e5f4efb3b2c1da09aaa224",
            "title": "Bachav",
            "description": "Attack on territory",
            "tag": "Defence",
            "date": "2024-03-05T22:33:12.120Z",
            "__v": 0
          }
    ]


    // const [notes,setNotes] = useState({"title":"","description":"","tag":""})
    const [notes,setNotes] = useState(note_array)



    const add_note = async(note)=>{

      // API CALL

      // console.log("Inside notestate")

      // console.log(note)

      // let url = "http://localhost:3000/api/notes/addnote"

      // const response = await fetch(url, {

      //   method: "POST",

      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(note.title,note.description,note.tag), // body data type must match "Content-Type" header
      // });
      // const json = await response.json(); // parses JSON response into native JavaScript objects
      // console.log(json)

      // setNotes(notes.concat(json))

      const note_dummy = {
        "_id": "65e64294a67f840ed027c882",
        "user": "65e5f4efb3b2c1da09aaa224",
        "title": "Racing_updated",
        "description": "F1 Racing_updated",
        "tag": "Cars_updated",
        "date": "2024-03-04T21:52:20.698Z",
        "__v": 0
      }

       setNotes(notes.concat(note_dummy))

    }

    const delete_note = (id)=>{

      // API CALL

      const newNotes = notes.map((note)=>{

        return note._id!=id
      })

      setNotes(newNotes)

    }

    // Fetch notes using GET /api/notes/getnote

    const fetch_note = async()=>{

      let url = "http://localhost:3000/api/notes/getnote"

      const response = await fetch(url, {

        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
        
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      setNotes(json)
    }

   

    

  return (
    <div>

        <noteContext.Provider value={{notes,add_note,fetch_note}}>
            {props.children}
        </noteContext.Provider>
      
    </div>
  )
}
