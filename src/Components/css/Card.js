import React from 'react'
import "./card.css"
import {Container,Col,Row} from "react-bootstrap"
 import {Profile} from "../Data"
 const Card = () => {
  return (
   <>
   <div className='Main-card'> 
   <div className="address">
    <h1>Home Cards </h1>
    <hr />
   </div>
   <div className='Card'>
    <Row> 
        {Profile.map((item)=>(
            
    <Col key={item.id} xs={12} sm={6} md={3}>
  <div className="flip-card"  >
    <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={item.image} alt="" />
        </div>
        <div className="flip-card-back">
            <h4> {item.heading4}</h4>
            <hr />
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis, sed ipsa, ad quo velit dolor doloremque tempore</p>
        </div>
    </div>
    
</div>
</Col>
        ))}
   
</Row>
 
 </div>
 </div>
  </>
    
  )
}
export default Card