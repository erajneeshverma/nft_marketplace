import React from 'react'

//internal import
import Style from '../styles/index.module.css';
import { HeroSection } from '@/components/componentindex';

const Home = () => {
  return (
    <div className={Style.heroPage}>
      <HeroSection/>
    </div>
  )
}

export default Home;