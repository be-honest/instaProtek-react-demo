import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import HeroSection from './Section/HeroSection';
import WhyInstaProtek from './Section/Section1';
import InstaProtekApp from './Section/Section2';
import GadgetCards from './Section/Section3';

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
      {/* <InstaProtekApp/> */}
      {/* <GadgetCards/> */}
    </>
  )
}

export default Home
