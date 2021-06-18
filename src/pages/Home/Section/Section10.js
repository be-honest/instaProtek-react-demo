import React from 'react'
import styled from 'styled-components'
import MobilePhone from '../../../images/Group1149.png'
import GoogleLogo from '../../../images/Mask Group 2.png'
import AppleLogo from '../../../images/Mask Group 3.png'
import BckgrndImg from '../../../images/MaskGroup6.png'
import PageWrapper from '../../../components/PageWrapper'

const AdSection = () => {
  return (
    <Section>
      <PageWrapper>
        <SectionWrapper>
          <Left>
            <img src={MobilePhone} alt="" />
          </Left>
          <Right>
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
          </Right>
        </SectionWrapper>
      </PageWrapper>
    </Section>
  )
}

const Section = styled.section`
  background-image: url(${BckgrndImg});
  position: relative;
  width: 100%;
  height: 389px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Left = styled.div`
  display: block;
  img{
    width: 472px;
    height: 385px;
    object-fit: cover;
    object-position: 20px 10px;
    @media (max-width: 800px) {
      height: unset;
    }
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`

const Right = styled.div`
  padding-left: 20px;
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
`


export default AdSection
