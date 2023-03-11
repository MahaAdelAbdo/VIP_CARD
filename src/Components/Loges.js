import React from 'react'
import "./Loges.css"
import {Row,Col} from "react-bootstrap";
import {DateLoges} from "./Data"
const Loges = () => {
  return (
    <div className='Main-loges'>
        <div className="adressLogo">
            <h1>Logoes Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <hr/>
        </div>
        <div className='loges'>
        <Row>
        {DateLoges.map((item)=>(
        <Col key={item.id} md={2} sm={4} xs={6}>
        <img src={item.image}  alt="here is photo" />
        </Col>
        ))}
        </Row>
        </div>
    </div>
  )
}

export default Loges