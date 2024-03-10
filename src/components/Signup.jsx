import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Signup(props) {

    const [credentials,setCredentials] = useState({email:"",password:"",name:""})

    const navigate = useNavigate();


    const handleSubmit = async(e)=>{

        console.log("Inside handle Submit")

        e.preventDefault()

        let url = "http://localhost:3000/api/auth/createuser"

      const response = await fetch(url, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
   
        body: JSON.stringify({email:credentials.email,password:credentials.password,name:credentials.name}), // IDK WHETHER TO DO body: JSON.stringify(note) 
      });
      const json = await response.json(); 
      console.log(json)

      if (json.success){

        navigate("/");

        localStorage.setItem('token',json.authtoken)

        console.log("Should print token")


        console.log(localStorage.getItem('token'))

        props.showAlert("User created successfully","success")
    }

    else{
        props.showAlert(json.errors,"danger")
    }

    }

    const onChange = (e)=>{

        console.log("Inside on Change")

        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
//  

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label" value={credentials.name}>Name</label>
        <input type="name" className="form-control" id="name" name='name' onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"  value={credentials.email}>Email address</label>
        <input type="email" className="form-control" id="email" name='email' onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label" value={credentials.password}>Password</label>
        <input type="password" className="form-control" id="password" name='password' onChange={onChange} />
      </div>
    
      <div className="d-flex justify-content-center"> {/* Centering container */}
        <button type="submit" className="btn btn-primary mb-3">Submit</button>
      </div>
      </form>
    </div>
  );
}
