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
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlNWY0ZWZiM2IyYzFkYTA5YWFhMjI0In0sImlhdCI6MTcwOTU4OTA0OX0.7ZAScY1Zecl4Ck6Av5GoI1STHa7tent8nGm_Vgtv6tA"
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

      // const note_dummy = {
      //   "_id": "65e64294a67f840ed027c882",
      //   "user": "65e5f4efb3b2c1da09aaa224",
      //   "title": "Racing_updated",
      //   "description": "F1 Racing_updated",
      //   "tag": "Cars_updated",
      //   "date": "2024-03-04T21:52:20.698Z",
      //   "__v": 0
      // }

      //  setNotes(notes.concat(note_dummy))

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
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlNWY0ZWZiM2IyYzFkYTA5YWFhMjI0In0sImlhdCI6MTcwOTU4OTA0OX0.7ZAScY1Zecl4Ck6Av5GoI1STHa7tent8nGm_Vgtv6tA"
        },
        
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      console.log("Printing notes after API call")
      console.log(json.notes)
      setNotes(json.notes)
    }

   

    

  return (
    <div>

        <noteContext.Provider value={{notes,add_note,fetch_note}}>
            {props.children}
        </noteContext.Provider>
      
    </div>
  )
}
