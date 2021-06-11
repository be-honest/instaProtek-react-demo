import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import HeroSection from './Section/HeroSection';
import WhyInstaProtek from './Section/Section1';
import InstaProtekApp from './Section/Section2';
import GadgetCards from './Section/Section3';
import ProductSection from './Section/Section5';
import PriceChartSection from './Section/Section6';
import ProductGuaranteeSection from './Section/Section7';
import PlatformSection from './Section/Section8';
import ReviewsSection from './Section/Section9';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <SideBar isOpen={isOpen} toggle = {toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <WhyInstaProtek/>
      <InstaProtekApp/>
      <GadgetCards/>
      <ProductSection/>
      <PriceChartSection/>
      <ProductGuaranteeSection/>
      <PlatformSection/>
      <ReviewsSection/>
    </>
  )
}

export default Home
