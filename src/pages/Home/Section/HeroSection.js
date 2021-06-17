import React from 'react'
import styled from 'styled-components'
import {Themes} from '../../../utils/Variables'
import PageWrapper from '../../../components/PageWrapper'
import BannerImg from '../../../images/Phone-Rack_v2.png'
import Button from '../../../components/Button'
import GoogleLogo from '../../../images/Mask Group 2.png'
import AppleLogo from '../../../images/Mask Group 3.png'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <BackgroundImage src={BannerImg}/>
        <PageWrapper>
          <HeroContent>
            <HeroSpan theme = {Themes}>
              Warranty Program
            </HeroSpan>
            <HeroH1>Protection Plans for All Electronics</HeroH1>
            <HeroSpan theme = {Themes}>a low-cost and painless protection coverage to avoid future inconvenience because accidents happen.</HeroSpan>
            <HeroBtnWrapper>
              <Button theme = {Themes} width='13rem'>
                Explore 
              </Button>
              <div className="applogo">
                <a href="www.google.com" className="google">
                  <img src={AppleLogo} alt="Google PlayStore Logo" />
                </a>
                <a href="www.apple.com" className="apple">
                  <img src={GoogleLogo} alt="Apple Store Logo" />
                </a>
              </div>
              <div className="hero-brands">
                <h2>trusted by brands:</h2>
              </div>
            </HeroBtnWrapper>
          </HeroContent>
        </PageWrapper>
        <HeroFooter>
          <HeroFooterContent>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <button>Download App</button>
          </HeroFooterContent> 
        </HeroFooter>
      </HeroBackground>
    </HeroContainer> 
  )
}

const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position:relative;
  z-index: 1;
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 871px;
  -o-object-fit: cover;
  object-fit: cover;
  @media (max-width: 900px){
    height: 750px;
  }
`

const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  top: 10rem;
  align-items: left;
  padding: 8px 24px;
  @media (max-width: 769px){
   padding-right: 280px; 
  }
`

const HeroSpan = styled.span`
  color: ${(t) => t.theme.secondarycolor};
  font-size: 1.2rem;
  text-transform: capitalize;
  line-height: 2rem;
  @media (max-width: 769px){
   font-size: 1rem; 
  }
`

const HeroH1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #000;
  @media (max-width: 769px){
   font-size: 1.5rem 
  }
`

const HeroBtnWrapper = styled.div`
  padding-top: 5rem;
  .applogo{
    padding-top: 5rem;
    img {
      width: 7rem;
      @media (max-width: 900px){
        width: 5rem;
      }
    }
    
  }
  .hero-brands {
    padding-top: 8rem;
    h2 {
      text-transform: uppercase;
      font-weight: 100;
    }
  }
  @media (max-width: 769px){
    padding-top: 3rem;
    .hero-brands{
      padding-top: 5rem;
    }
  }
`

const HeroFooter = styled.div`
  background-color: #7c92a9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 2rem;
  @media (max-width: 900px){
    padding: 1rem;
  }
  @media (max-width: 769px){
   text-align: center 
  }
`

const HeroFooterContent = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 800;
  p {
    display: inline-block;
    padding-right: 2rem;
    @media (max-width: 769px){
      padding-bottom: 1rem;
    }
  }
  button {
    border: 2px solid white;
    background-color: transparent;
    border-radius: 5rem;
    line-height: 3rem;
    width: 13rem;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    color: white;
    &:hover {
      background-color: #ffffff;
      box-shadow: 0px 15px 20px rgba(90, 90, 90, 0.4);
      transform: translateY(-7px);
      color: #7c92a9;
    }
    @media (max-width: 769px){
      width: 10rem;
    }
  }
`



export default HeroSection
