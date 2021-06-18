import React from 'react'
import { Themes } from '../../../utils/Variables'
import PageWrapper from '../../../components/PageWrapper'
import BannerImg from '../../../images/Phone-Rack_v2.png'
import Button from '../../../components/Button'
import GoogleLogo from '../../../images/Mask Group 2.png'
import AppleLogo from '../../../images/Mask Group 3.png'
import { BackgroundImage, HeroBackground, HeroBtnWrapper, HeroContainer, HeroContent, HeroFooter, HeroFooterContent, HeroH1, HeroSpan } from './HeroElements'


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
            <HeroH1>Protection Plans for <br />  All Electronics</HeroH1>
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





export default HeroSection
