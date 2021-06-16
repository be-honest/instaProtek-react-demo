import React, { useEffect } from 'react'
import styled from 'styled-components'
import PhoneApp from "../../../images/Instaprotek-App.png"
import AOS from 'aos'
import 'aos/dist/aos.css';

const InstaProtekApp = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <SectionWrapper data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
      <h2>instaProtek App</h2>
      <p>Frictionless, app-driven registration and communication</p>
      <img src={PhoneApp} alt="" className="phoneApp"/>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 2.5rem;
    @media (max-width: 900px) {
      padding-top: 5rem;
    }
  }
  p {
    font-size: 1rem;
    padding-top: 0.5rem;
    color: $secondarycolor;
  }
  .app-crop {
    width: 1136px;
    height: 400;
    object-fit: cover;
    object-position: 20px 10px;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`

export default InstaProtekApp
