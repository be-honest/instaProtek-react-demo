import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import PageWrapper from "../../../components/PageWrapper"
import TGreenIcon from '../../../images/Group 1167.png'
import { FaCheck } from 'react-icons/fa';
import {Themes} from '../../../utils/Variables'
import backgroundImg from '../../../images/Asset 10@300x-9.png'
import Button from '../../../components/Button';

const WhyInstaProtek = () => {
  const slideLeft = useSpring({ from: { opacity: 0 }, to: { opacity: 2  } });
  
  return (
    <SectionWrapper>
      <PageWrapper>
        <SectionContentWrapper>
          {/* <Spring 
            from={{ opacity: 0, marginRight: -1000}}
            to={{ opacity: 1, marginRight: 0}}
            config={{delay: 1000, duration: 1000}}
          > */}
          <SectionHeader style={slideLeft}>
            <img src={TGreenIcon} alt="T Green Icon" />
            <h2>Why instaProtek?</h2>
          </SectionHeader>
          {/* </Spring> */}
          <SectionContent>
            <div className="backgroundImg">
              <img src={backgroundImg} alt="" />
            </div>
            <animated.div className="right-container" style={slideLeft}>
              <h2>On Demand, Easy To use, App Driven Protection</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed diam nonumy eirmod et.</p>
            </animated.div>
            <div className="right-details-container">
              <div className="right-details">
                <div className="list-item">
                  <CheckIcon/>
                  <span theme = {Themes}>Afforadable</span>
                  <p>Smart platform combined with sophisticated app allowing for lower cost and deductible.</p>
                </div>
                <div className="list-item">
                  <CheckIcon/>
                  <span theme={Themes}>Easy to use</span>
                  <p>On-demand, easy-to-use, app-driven protection that enables purchases with the push of a button.</p>
                </div>
                <div className="list-item">
                  <CheckIcon/>
                  <span theme={Themes}>Competitive</span>
                  <p>Unmatched nationwide coverage backed by a top-rated provider and reliable 24/7 support.</p>
                </div>
              </div>
            </div>
            <div className="left-container">
              <div className="left-content">
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
    width: 100%
  }
  .right-container{
    position: absolute;
    top: 15rem;
    right: 11rem;
    max-width: 550px;
    font-size: 1.5rem;
    padding: 0 2rem;
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
        }
      }
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
    }
  }
`

const SectionContent = styled.div`
  padding-top: 5rem;
`


const CheckIcon = styled(FaCheck)`
  color: lightgreen;
`


export default WhyInstaProtek
