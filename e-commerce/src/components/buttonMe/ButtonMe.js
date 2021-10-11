import React from 'react'
import './ButtonMe.css';


function ButtonMe({className,action,name}) {
    return (
       
           <button className={`button ${className}`} onClick={action}>{name}</button> 
        
    )
}

export default ButtonMe
