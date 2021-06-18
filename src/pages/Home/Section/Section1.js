import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css';
import PageWrapper from "../../../components/PageWrapper"
import TGreenIcon from '../../../images/Group 1167.png'
import { FaCheck } from 'react-icons/fa';
import { Themes } from '../../../utils/Variables'
import backgroundImg from '../../../images/Asset 10@300x-9.png'
import Button from '../../../components/Button';

const WhyInstaProtek = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <SectionWrapper>
      <PageWrapper>
        <SectionContentWrapper>
          <SectionHeader>
            <img src={TGreenIcon} alt="T Green Icon" />
            <h2>Why instaProtek?</h2>
          </SectionHeader>
          <SectionContent>
            <div className="backgroundImg">
              <img src={backgroundImg} alt="" />
            </div>
            <div className="right-container" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
              <h2>On Demand, Easy To use, App Driven Protection</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed diam nonumy eirmod et.</p>
            </div>
            <div className="right-details-container">
              <div className="right-details" data-aos="fade-in" data-aos-delay="50" data-aos-duration="1000">
                <div className="list-item">
                  <Title>
                    <CheckIcon/>
                    <span theme = {Themes}>Afforadable</span>
                  </Title>
                  <p>Smart platform combined with sophisticated app allowing for lower cost and deductible.</p>
                </div>
                <div className="list-item">
                  <Title>
                    <CheckIcon/>
                    <span theme={Themes}>Easy to use</span>
                  </Title> 
                  <p>On-demand, easy-to-use, app-driven protection that enables purchases with the push of a button.</p>
                </div>
                <div className="list-item">
                  <Title>
                    <CheckIcon/>
                    <span theme={Themes}>Competitive</span>
                  </Title>
                  <p>Unmatched nationwide coverage backed by a top-rated provider and reliable 24/7 support.</p>
                </div>
              </div>
            </div>
            <div className="left-container">
              <div className="left-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                <h2>
                  Protect your electronics, the way you protect your money.
                </h2>
                <p>No-hassle, electronics protection with the tap of a finger.</p>
                <Button width="13rem">Download App</Button>
              </div>
            </div>
          </SectionContent>
        </SectionContentWrapper>
      </PageWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  margin-top: 15rem;
  min-height: 1750px;
  @media (max-width: 900px){
    margin-top: 5rem;
    min-height: 1000px;
  }
`
const SectionHeader = styled.div`
  text-align: center;
  padding-top: 1rem;
  img{
    padding-bottom:1rem;
  }
  h2 {
    font-weight: 100;
    font-size: 2rem;
  }
`

const SectionContentWrapper = styled.div`
  position: relative;
  .backgroundImg{
    position: absolute;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    img{
      @media (max-width: 1366px){
        width: 100%;
      }
      @media (max-width: 900px){
        opacity: 0.3;
      }
    }
  }
  .right-container{
    position: absolute;
    top: 15rem;
    right: 11rem;
    max-width: 550px;
    font-size: 1.5rem;
    padding: 0 2rem;
    @media (max-width: 1366px){
      right: 3rem;
    }
    @media (max-width: 900px){
      right: 8rem;
      font-size: 1rem;
      text-align: center;
      padding: 1rem;
    }
    @media (max-width: 600px){
      position: static;
      max-width: unset;
    }
  }
  .right-details-container{
    position: absolute;
    top: 23rem;
    right: -4.5rem;
    padding: 0 2rem;
    max-width: 800px;
    .right-details{
      display: flex;
      flex: none;
      flex-wrap: wrap;
      .list-item{
        padding: 5rem 2rem 0 0;
        display: flex;
        flex-direction: column;
        align-content: space-evenly;
        width: 50%;
        span{
          color: #2ea1f8;
          font-weight: 900;
          font-size: 1.5rem;
          padding-left: 0.5rem;
        }
        @media (max-width: 1366px){
          padding: 1rem 0;
        }
        @media (max-width: 600px){
          padding: 0;
          width: 100%;
          text-align: center;
        }
      }
      @media (max-width: 600px){
        padding: 3rem 0;
        flex-direction: column;
        align-items: center;
      }
      @media (max-width: 1600px){
        padding-right: 5rem;
      }
      @media (max-width: 1366px){
        flex-wrap: nowrap;
        flex-direction: column;
      }
      @media (max-width: 600px){
        padding: 1rem 0;
      }
    }
    @media (max-width: 1366px){
      right: -16rem;
      top: 25rem;
    }
    @media (max-width: 900px){
      top: 23rem;
      padding: 0 5rem;
      right: -18rem;
    }
    @media (max-width: 600px){
      position: static;
      padding: 0 1rem;
    }
  }
  .left-container{
    position: absolute;
    bottom: -75rem;
    left: 0;
    max-width: 600px;
    font-size: 1.5rem;
    .left-content{
      padding-bottom: 3rem;
      p{
        padding-bottom: 3rem;
      }
      @media (max-width: 1600px){
        padding-left: 5rem;
      }
      @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      @media (max-width: 600px){
        position: static;
        padding: 0 1rem;
      }
    }
    @media (max-width: 900px){
      left: 8rem;
      bottom: -45rem;
      font-size: 1rem;
    }
    @media (max-width: 600px){
      position: static;
      padding: 3rem 0;
      max-width: unset;
    }
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px){
    justify-content: center;
    padding: 0.5rem 0;
  }
`

const SectionContent = styled.div`
  padding-top: 5rem;
`

const CheckIcon = styled(FaCheck)`
  color: lightgreen;
`


export default WhyInstaProtek
