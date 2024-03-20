import React from 'react'

//internal import
import Style from '../styles/index.module.css';
import { BigNFTSlider, Category, Filter, HeroSection, Service, Subscribe, Title } from '../components/componentindex.js';

const Home = () => {
  return (
    <div className={Style.heroPage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Filter />
      <Title heading="Browse by category" paragraph="Explore the NFT in the most feature categories."/>
      <Category />
      <Subscribe/>
    </div>
  )
}

export default Home;