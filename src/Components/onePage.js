import React, { useState } from 'react'
import "./onePage.css"
import {CiGrid2H} from "react-icons/ci"
import {CiGrid2V} from "react-icons/ci"
import{Link} from "react-router-dom"
const OnePage = () => {
    const [click,setClick]=useState(true);
    const clickIn =()=>{
        setClick(!click)
    }
     
  return (

      

    <div>
  <div className='navber'>
        <h3>logo</h3>
        <div >
        <nav className='navbar-default'>
        <ul className={click ?"navberUl active" :"navberUl"}>
        <li><Link target="_blank" to="/">home</Link></li>
        <li><Link target="_blank" to="/about">About</Link></li>
        <li><Link  target="_blank" to="/content">content</Link></li>
        </ul>
        </nav>
        </div>
         <div className='barger' onClick={clickIn}>
            {click ?<CiGrid2H/>: <div className='close'><CiGrid2V/></div>  }
        </div>
        </div>
          </div>  
        
  )
}

export default OnePage