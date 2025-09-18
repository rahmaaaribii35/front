import React from 'react'
import Hero from '../compoenents/Hero'
import LatestCollection from '../compoenents/LatestCollection'
import Carousel from '../compoenents/Carousel'

const Home = () => {
  return (
    <div>
      <br/><br/><Carousel/> <br/> <br/> <br/>
      <Hero/>
      <LatestCollection/>
    </div>
  )
}

export default Home
