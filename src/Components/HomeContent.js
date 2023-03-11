import React from 'react'
import "./HomeContent.css"
import {MdOutlineContentPaste} from "react-icons/md"
import {BsFillFileEarmarkPersonFill} from "react-icons/bs"
import {Link} from "react-router-dom"
const ConContent = () => {
  return (
    <div className='Main-Content'>
    <div className="HonImage">
 
 
    <button   className="ConBtn second-btn">
     <Link to="/about"
     target="_blank" >About  </Link> 
      <Link className='icons' target="_blank" to="/about">
    <BsFillFileEarmarkPersonFill/>
        </Link> 

    </button>
          <button  className="ConBtn frist-btn">
     <Link to="/content" target="_blank">
      Content
        </Link> 
   <Link className='icons' to="/content" target="_blank">
    <MdOutlineContentPaste/>
    </Link> 
    </button>
   
    </div>
    </div>
  )
}

export default ConContent