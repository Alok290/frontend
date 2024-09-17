import React from 'react'
import './nofile.css';
import noFileImage from '../asset/Screenshot 2024-07-19 000307.png'

const NoFile = () => {
  return (
    <div className='noFile'>
        <img src={noFileImage} alt="SomeTime Went Wrong"  className='noImage'/>

    </div>
  )
}

export default NoFile