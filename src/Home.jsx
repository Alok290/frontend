import React from 'react'
import BStep from './bookingSteps/BStep'
import Testimonial from './Testimonial/Testmonial'

const Home = () => {
  return (
    <div className="home">
        <div className="home__content">
            <BStep />
            <Testimonial />
        </div>
    </div>
  )
}

export default Home