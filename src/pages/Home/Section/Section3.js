import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import PageWrapper from '../../../components/PageWrapper'
import {Themes} from '../../../utils/Variables'
import MobileTablet from '../../../images/ipad-mini-2-mobile-tablet-png.png'
import Watches from '../../../images/android_wear_watches-930x465.png'
import Laptop from '../../../images/laptop.png'

const GadgetCards = () => {
  return (
    <SectionWrapper themes = {Themes}>
      <PageWrapper>
        <div className="card1-container">
          <div className="card-wrapper">
            <div className="card-item-content-left">
              <img src={MobileTablet} alt="Gadgets like tablet and iPhone" />
            </div>
            <div className="card-item-content-right">
              <h3>For your Smartphone, Tablet and Accessories</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed diam</p>
            </div>
          </div>
        </div>
        <div className="card2-container">
          <div className="card-wrapper">
            <div className="card-item-2">
              <div className="card-item-content">
                <h3>For your wearables</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed diam</p>
                <img src={Watches} alt="Different watches" />
              </div>
            </div>
            <div className="card-item-3">
              <div className="card-item-content">
                <h3>For your Computer & Accessories </h3>
                <p>Lorem ipsum dolor, sit amet consectetur</p>
                <img src={Laptop} alt="Laptop" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-button">
          <Button width='10rem'>Explore</Button>
        </div>
      </PageWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  background-color: #f8f8f8;
 .card1-container {
    padding-top: 4rem;
    padding-bottom: 1rem;
    .card-wrapper {
      background-color: white;
      border-radius: 10px;
      width: 100%;
      padding: 0 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75%;
      @media (max-width: 1400px) {
        flex-direction: column;
      }
      .card-item-content-left {
        width: 50%;
        padding: 5rem 10rem;
        @media (max-width: 1400px) {
          width: unset;
          padding: 0;
        }
      }

      .card-item-content-right {
        width: 50%;
        @media (max-width: 1400px) {
          width: 100%;
          padding-top: 2rem;
        }
        h3 {
          text-align: center;
          text-align: center;
          padding: 0 10rem;
          font-size: 1.4rem;
        }
        p {
          text-align: center;
          font-size: 1rem;
          padding-top: 1rem;
          color: #7c92a9;
        }
      }
    }
  }

  .card2-container {
    .card-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      height: 65%;
      .card-item-2 {
        background-color: white;
        border-radius: 10px;
        flex-grow: 8;
        margin-right: 0.5rem;
        height: 100%;
        .card-item-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding-top: 5rem;
          padding-bottom: 6rem;
          h3 {
            text-align: center;
            text-align: center;
            padding: 0 10rem;
            font-size: 1.4rem;
            @media (max-width: 1400px) {
              padding: 0rem;
            }
          }
          p {
            text-align: center;
            font-size: 1rem;
            padding-top: 1rem;
            color: $secondarycolor;
            @media (max-width: 1400px) {
              padding: 0 5rem;
            }
          }

          img {
            padding: 2rem;
            @media (max-width: 900px) {
              width: 100%;
            }
          }
        }
        @media (max-width: 900px) {
          width: 50%;
        }
        @media (max-width: 600px) {
          margin-bottom: 1rem;
          margin-right: 0;
          width: 100%;
        }
      }
      .card-item-3 {
        background-color: white;
        border-radius: 10px;
        flex-grow: 2;
        margin-left: 0.5rem;
        width: 40%;
        .card-item-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 5rem 0;
          h3 {
            text-align: center;
            padding: 0 5rem;
            font-size: 1.4rem;
          }
          p {
            text-align: center;
            font-size: 1rem;
            padding-top: 1rem;
            color: $secondarycolor;
          }
          img {
            padding: 2rem;
            @media (max-width: 900px) {
              width: 100%;
            }
          }
        }
        @media (max-width: 900px) {
          width: 50%;
        }
        @media (max-width: 600px) {
          margin-bottom: 1rem;
          margin-left: 0;
          width: 100%;
        }
      }
      @media (max-width: 600px) {
        flex-wrap: wrap;
        height: auto;
      }
    }
  }
  @media (max-width: 900px) {
    padding: 1.5rem;
  }
  .section-button{
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default GadgetCards
