import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import PageWrapper from '../../../components/PageWrapper'
import GreenLogo from '../../../images/Group 1182.png'
import LaptopPhone from '../../../images/Group 1032.png'
import Lines from '../../../images/Group 1164.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

const PlatformSection = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <SectionWrapper>
      <PageWrapper>
        <SectionContainer>
          <div className="section-content-right" data-aos="fade-right" data-aos-delay="150" data-aos-duration="1000">
            <img src={GreenLogo} alt="" />
            <h2>production guarantee & protection platform</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem Ipsum Dolor Sit Amet,</p>
            <Button width='10rem'>Contact Us</Button>
          </div>
          <div className="section-content-left">
            <img src={LaptopPhone} alt="" />
          </div>
          <img src={Lines} alt="" className="line" />
        </SectionContainer>
      </PageWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  position: relative;
  margin-top:5rem;
  @media (max-width: 900px){
    margin:0;
  }
`

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem 0;
  @media (max-width: 880px) {
    flex-direction: column;
  }
  .section-content-right{
    width: 100%;
    img {
      padding-bottom: 1rem;
      @media (max-width: 1024px) {
        width: 100px;
      }
    }
    h2 {
      font-size: 2.5rem;
      text-transform: capitalize;
      @media (max-width: 1024px) {
        font-size: 2rem;
      }
      @media (max-width: 900px){
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 1rem;
      color: $secondarycolor;
      padding-bottom: 3rem;
      line-height: 2rem;
    }
    Button{
      margin-bottom:3rem;
    }
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem 2rem;
    }

  }
  .section-content-left{
    width: 100%;
    img {
      width: 100%;
    }
    @media (max-width: 880px) {
      width: 100%;
      text-align: center;
    }
  }
  .line{
    position: absolute;
    right: -280px;
    top: -255px;
    z-index: -1;
    @media (max-width: 1024px) {
      width: 50%;
      right: -300px;
      top: -56px;
    }
    @media (max-width: 880px) {
      display: none;
    }
  }
`

export default PlatformSection
