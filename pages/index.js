import React from 'react'

//internal import
import Style from '../styles/index.module.css';
import { HeroSection, Service } from '@/components/componentindex';

const Home = () => {
  return (
    <div className={Style.heroPage}>
      <HeroSection/>
      <Service/>
    </div>
  )
}

export default Home;