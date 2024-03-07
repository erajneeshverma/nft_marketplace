import React from 'react'

//internal import
import Style from '../styles/index.module.css';
import { HeroSection, Service, Subscribe } from '@/components/componentindex';

const Home = () => {
  return (
    <div className={Style.heroPage}>
      <HeroSection/>
      <Service/>
      
      <Subscribe/>
    </div>
  )
}

export default Home;