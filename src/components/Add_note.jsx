import React, { useContext, useState } from 'react'
import noteContext from "../context/Notes/Notecontext"
export default function Add_note() {

  /*
  
The warning you're encountering regarding changing an uncontrolled input to a controlled one typically happens when the input value is initially undefined and then becomes defined later. In your case, it's happening because you're trying to set the state of note in Add_note.jsx component with useState([]), which initializes it as an array, but then you're treating it as an object in onChange function.

Here's how you can fix it:

Change the initial state of note to an object instead of an array in Add_note.jsx.

Adjust the onChange function to handle the state correctly.

import React, { useContext, useState } from 'react';
import noteContext from "../context/Notes/Notecontext";

export default function Add_note() {
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const { add_note } = useContext(noteContext);

    const onChange = (e) => {
        const { name, value } = e.target;
        setNote(prevNote => ({ ...prevNote, [name]: value }));
    };

    const onClick = () => {
        add_note(note);
        // Clear the form after adding the note
        setNote({ title: "", description: "", tag: "" });
    };

    return (
        <div>
            <h2>Add Note</h2>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary mb-3" onClick={onClick}>Add Note</button>
        </div>
    );
}

  */


    // const [note,setNote] = useState([])
    const [note,setNote] = useState({title:"",description:"",tag:""})

    const a = useContext(noteContext)

    const onChange = (e)=>{

        // e.preventDefault wala dekhna hai!!

        // setNotes({...note,[e.target.name]:e.target.value})

        setNote({...note,[e.target.name]:e.target.value})


    }

    const onClick = ()=>{

      a.add_note(note)

      setNote({title:"",description:"",tag:""})
    }

  return (
    <div>
         <h2>Add Note</h2>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} />
</div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
  <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} />
</div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
  <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
</div>
<button disabled={note.title.length<5 || note.description.length<3} type="submit" className="btn btn-primary mb-3" onClick={onClick}>Add Note</button>
      
    </div>
  )
}
