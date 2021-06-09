import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../../../components/PageWrapper'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        {/* <BackgroundImage> */}
        <img src={require('../../../images/Phone-Rack_v2.png').default} alt='Phone Rack Banner' className='banner'/>
        {/* </BackgroundImage> */}
        <PageWrapper>
          <HeroContent>
            <span>
              Warranty Program
            </span>
            <h1>Protection Plans for All Electronics</h1>
            <span>a low-cost and painless protection coverage to avoid future inconvenience because accidents happen.</span>
            <button>Explore</button>
          </HeroContent>
        </PageWrapper>
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
  overflow: hidden;
  .banner{
    width:100%
  }
`

// const BackgroundImage = styled.div`
//   background-image: url('../../images/Phone-Rack_v2.png');
//    background-repeat: no-repeat;
//   background-size: 100%;
//   width: 100%;
//   height: auto;
//   z-index: 999;
// `

const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`

// const Button = styled.button

export default HeroSection
