import React from 'react'
import styled from 'styled-components'
import MobilePhone from '../../../images/Group 1149.png'
import GoogleLogo from '../../../images/Mask Group 2.png'
import AppleLogo from '../../../images/Mask Group 3.png'
import BckgrndImg from '../../../images/Mask Group 6.png'

const AdSection = () => {
  return (
    <Section>
      <SectionBackground src={BckgrndImg}/>
      <SectionWrapper>
        <div className="section-left-content">
          <img src={MobilePhone} alt="" />
        </div>
        <div className="section-right-content">
          <h2>Protect your electronics the way you protect your money.</h2>
          <p>No-hassle. Electronics protection with the tap of a finger.</p>
          <div className="applogo">
            <a href="www.google.com" className="google">
              <img src={AppleLogo} alt="Google PlayStore Logo" />
            </a>
            <a href="www.apple.com" className="apple">
              <img src={GoogleLogo} alt="Apple Store Logo" />
            </a>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  width: 100%;
`

const SectionBackground =styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const SectionWrapper = styled.div`
  position: absolute;
  top: 5rem;
  left: 25rem;
  height: 100%;
  display: flex;
  justify-content: center;
  .section-left-content{
    img{
      width: 100%;
      height: 80.5%;
      object-fit: cover;
      object-position: 20% 10%;
    }
  }
  .section-right-content{
    padding-top: 1rem;
    padding-right: 25rem;
    h2 {
      font-size: 2.5rem;
      @media (max-width: 1450px) {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1rem;
      font-weight: 100;
      color: $secondarycolor;
      padding-bottom: 3rem;
    }
    .ios {
      padding-right: 2rem;
      @media (max-width: 1600px) {
        width: 150px;
        padding-right: 0;
      }
      @media (max-width: 1400px) {
        width: 100px;
      }
    }
  }
`


export default AdSection
