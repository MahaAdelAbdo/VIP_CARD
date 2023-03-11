import React, { useEffect } from 'react';
import {Carousel} from 'react-bootstrap';
import "./Carousel.css"
import {Data} from "./Data"
import Aos from 'aos';
import 'aos/dist/aos.css';
function CarouselBoot() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
        <Carousel className='carousel'>
      {Data.map((item)=>(
    
             <Carousel.Item key={item.id}>
        <img
          className="d-block w-100"
          src={item.image}
          alt={item.alt}
        />
        <Carousel.Caption className='carousel-text' >
      
          <h3>{item.heading3}</h3>
          <p>{item.paragh}</p>
         
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>  
  
    </>
  );
}

export default CarouselBoot