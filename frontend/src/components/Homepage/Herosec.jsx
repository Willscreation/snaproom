import React from 'react'
import hero from '../../../imgs/hero.png'
import './style/Herosec.css'

const Hero = () => {
  return (
    <div className='herosec'>
        <div className='left'>
            <div><p>Snap. Upload. Share.</p></div>
            <a href="">Lets start</a>
        </div>
        <div className='right'>
            <img src={hero} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
