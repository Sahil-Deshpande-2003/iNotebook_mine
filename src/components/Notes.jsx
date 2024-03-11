import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/Notes/Notecontext'
import Noteitem from './Noteitem'
import { useNavigate } from "react-router-dom";
export default function Notes() {

  const a = useContext(noteContext)

  const ref = useRef(null)

  const refClose = useRef(null)

  const navigate = useNavigate();
  
  useEffect(()=>{

    console.log("Inside useEffect of Notes.jsx")

    console.log(localStorage.getItem('token'))

    if (localStorage.getItem('token')){

      console.log("Printing token inside if")

      console.log(localStorage.getItem('token'))

      a.fetch_note();
    }

    else{

      navigate("/login");
    }


  },[])

  // NEXT MOVE IS TO DISPLAY CURRENT TITLE DESC IN MODAL!!!!!!!!!!!!!!!!!!

  const display_update_note = (curr_note)=>{

    console.log("Inside display_update_note")

   console.log("Printing note inside display_update_note")

   console.log(curr_note)

    setNote({etitle:curr_note.title,edescription:curr_note.description,etag:curr_note.tag,eid:curr_note._id})

    ref.current.click()



  }

  

  const [note,setNote] = useState({etitle:"",edescription:"",etag:"",eid:""})


  // const onChange = (e)=>{

  //     console.log("INSIDE ONCHANGE")

  //     console.log(note.etitle)
  //     console.log(note.edescription)
  //     console.log(note.etag)
      
  //     // setNotes({...note,[e.target.name]:e.target.value})

  //     setNote({...note,[e.target.name]:e.target.value})

  //   }

  const onChange = (e) => {
  
    setNote({...note,[e.target.name]:e.target.value})
  };
  



  const onClick_update = ()=>{

    console.log("Inside onClick_update")

    console.log("Printing curr_note inside OnClick")

    console.log(note)

    a.update_note(note.eid,note.etitle,note.edescription,note.etag)

    refClose.current.click() // refClose jaha bhi point kar raha hai usko click kar va

    // a.add_note(note)
  }

  

  
  return (
    <div>
     <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
  <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} />
</div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
  <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
</div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
  <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
        <button type="button" disabled={note.etitle.length<5 || note.edescription.length<3} className="btn btn-primary" onClick={()=>{onClick_update()}}>Update Note</button>
      </div>
    </div>
  </div>
</div>

      <div className="row my-2">

        {a.notes.length === 0 && <h2>No notes to display</h2>}

        {a.notes.map((note)=>{

          return <div className="col-md-4 my-2">

            {console.log("Printing note before passing on to Noteitem")}

            {console.log(note)}

            <Noteitem note={note} display_update_note={display_update_note}/>
          </div>
        })}
      </div>
      
    </div>
  )
}
