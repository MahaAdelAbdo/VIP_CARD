import React,{ useRef, useState } from 'react';
 import {Col,Row} from "react-bootstrap"
 import {BiMessageSquareDetail} from 'react-icons/bi'
 import { AiOutlineMail } from "react-icons/ai";
 import { 
MdOutlineDriveFileRenameOutline } from "react-icons/md";
import {Link} from "react-router-dom"
import { Button } from '@mui/material';
import "./From.css"
import emailjs from "emailjs-com"
 const Result =()=>{
   return(
    <p>your message has been succesfully sent. i will contact you soon</p>

   )
}
 
const From = () => {
  
  const [result ,setResult]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_10bsftd', 'service_10bsftd', form.current, 'HdAHYKAuUyfAiMk5X')
      .then((result) => {
          console.log(result.text);
          console.log("it is working")
      }, (error) => {
          console.log(error.text);
          console.log("u have error")
      });
      e.target.reset()
      setResult(!result)
    };
    setTimeout(()=>{
       setResult(result)
    },3000)

  return (
    <div>
    <Row   className='MainFrom'>
 
      <Col  xs={12} className='MainFromGfrist'> 
    <div className="card-form">
  <div className="card2">
    <form className="form"ref={form} onSubmit={sendEmail}>
    <p id="heading">Login</p>
    <div className="field">
 
      <div className="input-icon">
        <MdOutlineDriveFileRenameOutline/>
      </div>
   
      <input type="text" className="input-field" placeholder="Username"  name="to_name"  />
    </div>
    <div className="field">
  
    <div  className="input-icon">
      <AiOutlineMail/>
    </div>
      <input type="email" className="input-field" placeholder="Email"name="from_name"/>
    </div>
      <div className="field">
   <div className="input-icon icon-massage">

<BiMessageSquareDetail/>
   </div>
      <textarea className="input-field"  placeholder='Enter the Message ' 
      name="message"
      />
    </div>
      <div className='result'> 
            {result?<Result/>:null}
      </div>
    <div className="btn">
    <Button className="button1"
    type="submit" value="Send" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Login  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
   </div>
 
</form>
  </div>
    </div>
    </Col>



 
    </Row>
    <div className='backgroundFixed'>

<button> <Link to="/content">
Content</Link>
</button>

    </div>
    
          <div className='lastLink'>
            <a href="/">Website Templates</a>
            <span>created with</span>
            <a href="/about">Website Builder Software</a>
         </div>
    </div>
  )
}

export default From
 