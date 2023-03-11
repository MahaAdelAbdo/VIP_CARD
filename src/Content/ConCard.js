import React from 'react'
 import "./ConCard.css"

const ConCard = () => {
  return (
    <div className='Main-ConCard'>
           <div className="address">
    <h1>Content Card </h1>
    <hr />
    </div>
        <div className="ConCard">
    <div className="card_load"></div>
    <div className="card_load_extreme_title">
        <h5>Momen Adel Abd Elftah Sanad</h5>
    </div>
    <div className="card_load_extreme_descripion">
       
       <p>
        orem ipsum dolor sit amet consectetur adipisicing elit Eligendi iure eveniet placeat voluptate dolore quaerat quas ea deserunt ratione earum quos assumenda nostrum tempora dignissimos eum numquam laudantium ipsum at!
       </p>
    </div>

 <br />
 <br />
</div>
   <div className='lastLink lastContent'>
            <a href="/">Website Templates</a>
            <span>created with</span>
            <a href="/about">Website Builder Software</a>
         </div>
    </div>  
 
  )
}
 

export default ConCard