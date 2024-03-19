import React from 'react'

//internal import
import Style from '../styles/index.module.css';
import { BigNFTSlider, Category, HeroSection, Service, Subscribe, Title } from '../components/componentindex.js';

const Home = () => {
  return (
    <div className={Style.heroPage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider />
      <Subscribe/>
      <Title heading="Browse by category" paragraph="Explore the NFT in the most feature categories."/>
      <Category />
    </div>
  )
}

export default Home;