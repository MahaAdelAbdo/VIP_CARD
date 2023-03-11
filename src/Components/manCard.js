import { Grid } from '@mui/material'
import React from 'react'
import { BsTelephoneFill} from "react-icons/bs"
import "./ManCard.css"
const ManCard = () => {
  return (
    <div className='ManCard'>
      <Grid className='ManCardGrid'> 
      <div className='imageleft'  > 
     
      
        </div>
             <div className='textright'  > 
          <h5>
            We realize that you lead a busy life, so we have made it easy for you to drop off your vehicle 24/7
          </h5>
          <p>Image from freepik</p>
         <div className='phoneManCard'> 
         <span> <BsTelephoneFill/></span>
          <h6>+1 (234) 567-8910</h6>
          </div>
        </div>
        </Grid>
    </div>
  )
}

export default ManCard