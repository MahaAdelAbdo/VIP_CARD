import React from 'react'
import {IoHomeOutline} from "react-icons/io5"
import "./about.css"
 
const About = () => {
  return (
    <div className='About'>
        <div className='logo_About'><a href="/"><IoHomeOutline/></a></div>
        <div className='backgrondFrist'
        >
       
         <h1>
        HARD TO</h1>
        <h2>NO MORE</h2>
        
        <p>AirPods don't hurt as much as EarPods, but they need an adjustment period.</p>
        
            
        </div>
           <div className='backgrondsecond'
        >
            <h2>Always Complaining About This Big, Big World</h2>
            <p>Apple's AirPods are awesome and have some amazing features, but they're pretty much the same size and design as EarPods. EarPods hurt (at least for some of us). So, it stands to reason that AirPods would, too — except they don't ... mostly.</p>
            
        </div>
           <div className='backgrondThrid'
        >
            <h1>
But what if they fall out?<br />
Always Complaining About This Big, Big World</h1>
    
        </div>
        
    </div>
  )
}

export default About