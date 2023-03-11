import React from 'react'
import "./cardAn.css"
 import {Col ,Row } from "react-bootstrap"
const cardAn = () => {
  return (
    <div className='Main_Card'>
      <Row>
    <Col md={4} sm={12} >
    <div className="card">

    <div className="card__image">
 <img   src="https://m.media-amazon.com/images/I/51HhYD53fML._AC_SX679_.jpg"/>  
 
    </div>
    <div className="card__content">
    <p className="card__title">Black Head Phone</p>
    <p className="card__text">If you've followed what I write on iMore.
    you've probably realized that I'm one of those people</p>
    <a className="card__button" href="#">Read More</a>
    </div>
    </div>
    </Col>
    <Col md={4} xs={12} sm={12}> 
      <div className="card"> 
    <div className="card__image"  >
    <img  src="https://m.media-amazon.com/images/I/5115N49BotL._AC_SX679_.jpg"/>
    </div>
    <div className="card__content">
    <p className="card__title">White Head Phone</p>
    <p className="card__text">you've probably realized that I'm one of those people that always complains about how big</p>
    <a className="card__button" href="#">Read More</a>
    </div>
    </div>
    </Col>
    <Col md={4} xs={12} sm={12}> 
      <div className="card"> 
    <div className="card__image image-third">
      <img style={{ objectPosition: "top"}} src="https://m.media-amazon.com/images/I/51cDhKBO5LS._AC_SX679_.jpg"/>
    </div>
    <div className="card__content">
    <p className="card__title">Blue Head Phone</p>
    <p className="card__text">you've probably realized that I'm one of those people that always complains about how big </p>
    <a className="card__button" href="#">Read More</a>
    </div>
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default cardAn