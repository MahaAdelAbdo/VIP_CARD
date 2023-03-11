import React from 'react'
import "./ConContent.css"
import {IoHome} from "react-icons/io5"
import {BsFillFileEarmarkPersonFill} from "react-icons/bs"
import {Link} from "react-router-dom"
const ConContent = () => {
  return (
    <div className='Main-Content'>
    <div className="ConImage">
      <button  className="ConBtn frist-btn">
     <Link to="/">
        Home 
        </Link> 
   <Link className='icons' to="/">
    <IoHome/>
    </Link> 
    </button>
 
    <button   className="ConBtn second-btn">
     <Link to="/about"
     target="_blank"
     >
        About  
        </Link> 
      <Link className='icons' target="_blank" to="/about">
    <BsFillFileEarmarkPersonFill/>
        </Link> 
    </button>
   
    </div>
    </div>
  )
}

export default ConContent