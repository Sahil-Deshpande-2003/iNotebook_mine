import React from 'react'

export default function Alert(props) {


    const capitalize = (text)=>{

        return text.charAt(0).toUpperCase() + text.slice(1)
    }

  return (
    <div>
        {console.log("INSIDE ALERT COMPONENT")}
     {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
     <b>{capitalize(props.alert.type)} </b> : {props.alert.message} 
</div>
}
    </div>
  )
}
